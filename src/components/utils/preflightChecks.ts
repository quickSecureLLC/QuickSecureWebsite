/**
 * QuickSecure Design System - Preflight Checks
 * 
 * Automated validation and correction for design system integrity.
 * Runs before page duplication and component insertion.
 * 
 * AUTOMATION: "Preflight: Single Header/Footer"
 * • Validates exactly ONE QS/Header at root level
 * • Validates exactly ONE QS/Footer at root level (after main content)
 * • Blocks dropping Header/Footer inside nested components
 * • Auto-inserts missing Header/Footer if needed
 * • Highlights and removes duplicates
 * 
 * @module preflightChecks
 * @version 2.0
 * @date October 25, 2025
 */

export interface PreflightResult {
  passed: boolean;
  errors: string[];
  warnings: string[];
  fixes: PreflightFix[];
}

export interface PreflightFix {
  type: 'auto-insert' | 'auto-correct' | 'remove' | 'warn';
  component: string;
  description: string;
  action: () => void;
}

/**
 * Check 1: Header Detection
 * Validates that exactly ONE QS/Header exists at root level
 */
export function checkHeaderPresence(): PreflightResult {
  const result: PreflightResult = {
    passed: true,
    errors: [],
    warnings: [],
    fixes: []
  };

  // Find all headers in the DOM
  const headers = document.querySelectorAll(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  );

  if (headers.length === 0) {
    result.passed = false;
    result.errors.push('No QS/Header found at root level');
    result.fixes.push({
      type: 'auto-insert',
      component: 'QS/Header',
      description: 'Auto-insert QS/Header at root (Y=0)',
      action: () => autoInsertHeader()
    });
  } else if (headers.length > 1) {
    result.passed = false;
    result.errors.push(`Multiple headers detected: ${headers.length} instances`);
    result.fixes.push({
      type: 'remove',
      component: 'QS/Header',
      description: `Remove ${headers.length - 1} duplicate header(s)`,
      action: () => removeDuplicateHeaders()
    });
  }

  // Check if header is at root level
  if (headers.length === 1) {
    const header = headers[0];
    const isAtRoot = header.parentElement?.tagName === 'BODY' || 
                     header.parentElement?.tagName === 'MAIN' ||
                     header.parentElement?.id === 'root';
    
    if (!isAtRoot) {
      result.passed = false;
      result.warnings.push('Header is not at root level');
      result.fixes.push({
        type: 'auto-correct',
        component: 'QS/Header',
        description: 'Move header to root level',
        action: () => moveHeaderToRoot()
      });
    }
  }

  return result;
}

/**
 * Check 2: Header Position Validation
 * Ensures header is sticky, at Y=0, and full width
 */
export function checkHeaderPosition(): PreflightResult {
  const result: PreflightResult = {
    passed: true,
    errors: [],
    warnings: [],
    fixes: []
  };

  const header = document.querySelector(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  ) as HTMLElement;

  if (!header) {
    result.passed = false;
    result.errors.push('No header found to validate position');
    return result;
  }

  const computedStyle = window.getComputedStyle(header);

  // Check sticky positioning
  if (computedStyle.position !== 'sticky' && computedStyle.position !== 'fixed') {
    result.passed = false;
    result.warnings.push('Header is not sticky or fixed');
    result.fixes.push({
      type: 'auto-correct',
      component: 'QS/Header',
      description: 'Apply sticky positioning (top: 0)',
      action: () => applyHeaderSticky()
    });
  }

  // Check top position
  if (computedStyle.top !== '0px') {
    result.warnings.push(`Header top position is ${computedStyle.top}, expected 0px`);
    result.fixes.push({
      type: 'auto-correct',
      component: 'QS/Header',
      description: 'Set top: 0',
      action: () => applyHeaderTop()
    });
  }

  // Check z-index
  const zIndex = parseInt(computedStyle.zIndex, 10);
  if (zIndex < 1000) {
    result.warnings.push(`Header z-index is ${zIndex}, expected 1000`);
    result.fixes.push({
      type: 'auto-correct',
      component: 'QS/Header',
      description: 'Set z-index: 1000',
      action: () => applyHeaderZIndex()
    });
  }

  // Check width
  if (computedStyle.width !== '100%' && header.offsetWidth < window.innerWidth * 0.95) {
    result.warnings.push('Header is not full width');
    result.fixes.push({
      type: 'auto-correct',
      component: 'QS/Header',
      description: 'Set width: 100%',
      action: () => applyHeaderWidth()
    });
  }

  return result;
}

/**
 * Check 3: Footer Detection
 * Validates that exactly ONE QS/Footer exists at root level
 */
export function checkFooterPresence(): PreflightResult {
  const result: PreflightResult = {
    passed: true,
    errors: [],
    warnings: [],
    fixes: []
  };

  // Find all footers in the DOM
  const footers = document.querySelectorAll(
    'footer[class*="qs-footer"], [data-component="qs-footer"]'
  );

  if (footers.length === 0) {
    result.passed = false;
    result.errors.push('No QS/Footer found at root level');
    result.fixes.push({
      type: 'auto-insert',
      component: 'QS/Footer',
      description: 'Auto-insert QS/Footer at root (after main content)',
      action: () => autoInsertFooter()
    });
  } else if (footers.length > 1) {
    result.passed = false;
    result.errors.push(`Multiple footers detected: ${footers.length} instances`);
    result.fixes.push({
      type: 'remove',
      component: 'QS/Footer',
      description: `Remove ${footers.length - 1} duplicate footer(s)`,
      action: () => removeDuplicateFooters()
    });
  }

  // Check if footer is at root level
  if (footers.length === 1) {
    const footer = footers[0];
    const isAtRoot = footer.parentElement?.tagName === 'BODY' || 
                     footer.parentElement?.tagName === 'MAIN' ||
                     footer.parentElement?.id === 'root';
    
    if (!isAtRoot) {
      result.passed = false;
      result.warnings.push('Footer is not at root level');
      result.fixes.push({
        type: 'auto-correct',
        component: 'QS/Footer',
        description: 'Move footer to root level (after main)',
        action: () => moveFooterToRoot()
      });
    }
  }

  return result;
}

/**
 * Check 4: Footer Position Validation
 * Ensures footer is at the end of content with proper spacing
 */
export function checkFooterPosition(): PreflightResult {
  const result: PreflightResult = {
    passed: true,
    errors: [],
    warnings: [],
    fixes: []
  };

  const footer = document.querySelector(
    'footer[class*="qs-footer"], [data-component="qs-footer"]'
  ) as HTMLElement;

  if (!footer) {
    result.passed = false;
    result.errors.push('No footer found to validate position');
    return result;
  }

  // Check if footer has proper spacing above it (96px)
  const prevElement = footer.previousElementSibling as HTMLElement;
  if (prevElement) {
    const hasSpacing = prevElement.classList.contains('section-spacing') ||
                       prevElement.style.marginBottom === '96px' ||
                       prevElement.style.marginBottom === 'var(--qs-section-spacing)';
    
    if (!hasSpacing) {
      result.warnings.push('Footer is missing 96px top spacing');
      result.fixes.push({
        type: 'auto-correct',
        component: 'QS/Footer',
        description: 'Add section-spacing div before footer',
        action: () => addFooterSpacing()
      });
    }
  }

  // Check if footer is the last element
  const isLastElement = !footer.nextElementSibling || 
                        footer.nextElementSibling.tagName === 'SCRIPT';
  
  if (!isLastElement) {
    result.warnings.push('Footer is not the last element on page');
    result.fixes.push({
      type: 'warn',
      component: 'QS/Footer',
      description: 'Footer should be the last element',
      action: () => console.warn('Move footer to end of page')
    });
  }

  return result;
}

/**
 * Check 5: Template Integrity
 * Validates that page templates have not been structurally modified
 */
export function checkTemplateIntegrity(): PreflightResult {
  const result: PreflightResult = {
    passed: true,
    errors: [],
    warnings: [],
    fixes: []
  };

  // Find all template sections
  const templates = document.querySelectorAll('[data-section]');

  templates.forEach((template) => {
    const section = template.getAttribute('data-section');
    
    // Check for headers inside templates
    const nestedHeaders = template.querySelectorAll(
      'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
    );

    if (nestedHeaders.length > 0) {
      result.passed = false;
      result.errors.push(`Header found inside ${section} template`);
      result.fixes.push({
        type: 'remove',
        component: 'QS/Header',
        description: `Remove header from ${section} template`,
        action: () => removeNestedHeaders(template)
      });
    }

    // Check for footers inside templates
    const nestedFooters = template.querySelectorAll(
      'footer[class*="qs-footer"], [data-component="qs-footer"]'
    );

    if (nestedFooters.length > 0) {
      result.passed = false;
      result.errors.push(`Footer found inside ${section} template`);
      result.fixes.push({
        type: 'remove',
        component: 'QS/Footer',
        description: `Remove footer from ${section} template`,
        action: () => removeNestedFooters(template)
      });
    }
  });

  return result;
}

/**
 * Check 6: Component Duplication Prevention
 * Blocks insertion of duplicate critical components
 */
export function checkComponentDuplication(componentName: string): PreflightResult {
  const result: PreflightResult = {
    passed: true,
    errors: [],
    warnings: [],
    fixes: []
  };

  // Components that should only exist once
  const singletonComponents = ['QS/Header', 'QS/Footer'];

  if (!singletonComponents.includes(componentName)) {
    return result; // Allow multiple instances
  }

  // Check existing instances
  const selector = componentName === 'QS/Header' 
    ? 'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
    : 'footer[class*="qs-footer"], [data-component="qs-footer"]';

  const existing = document.querySelectorAll(selector);

  if (existing.length >= 1) {
    result.passed = false;
    result.errors.push(`${componentName} already exists (${existing.length} instance(s))`);
    result.fixes.push({
      type: 'warn',
      component: componentName,
      description: `Edit existing ${componentName} instead of adding new one`,
      action: () => highlightExisting(existing[0] as HTMLElement)
    });
  }

  return result;
}

/**
 * Run All Preflight Checks
 * Comprehensive validation before page operations
 */
export function runAllPreflightChecks(): PreflightResult {
  const checks = [
    checkHeaderPresence(),
    checkHeaderPosition(),
    checkFooterPresence(),
    checkFooterPosition(),
    checkTemplateIntegrity()
  ];

  const combined: PreflightResult = {
    passed: checks.every(c => c.passed),
    errors: checks.flatMap(c => c.errors),
    warnings: checks.flatMap(c => c.warnings),
    fixes: checks.flatMap(c => c.fixes)
  };

  return combined;
}

// ========================================
// Auto-Fix Functions
// ========================================

function autoInsertHeader(): void {
  console.log('🔧 Auto-inserting QS/Header at root...');
  
  // This would integrate with your component system
  // For now, log the action
  console.warn('Auto-insert requires component system integration');
  
  // Example implementation:
  // const headerComponent = document.createElement('nav');
  // headerComponent.className = 'qs-header-container';
  // headerComponent.style.cssText = 'position: sticky; top: 0; z-index: 1000;';
  // document.body.insertBefore(headerComponent, document.body.firstChild);
}

function removeDuplicateHeaders(): void {
  console.log('🔧 Removing duplicate headers...');
  
  const headers = document.querySelectorAll(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  );

  // Keep first header, remove rest
  for (let i = 1; i < headers.length; i++) {
    console.log(`Removing duplicate header #${i + 1}`);
    headers[i].remove();
  }
}

function moveHeaderToRoot(): void {
  console.log('🔧 Moving header to root level...');
  
  const header = document.querySelector(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  ) as HTMLElement;

  if (header && document.body) {
    document.body.insertBefore(header, document.body.firstChild);
  }
}

function applyHeaderSticky(): void {
  const header = document.querySelector(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  ) as HTMLElement;

  if (header) {
    header.style.position = 'sticky';
    console.log('✅ Applied sticky positioning to header');
  }
}

function applyHeaderTop(): void {
  const header = document.querySelector(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  ) as HTMLElement;

  if (header) {
    header.style.top = '0';
    console.log('✅ Set header top: 0');
  }
}

function applyHeaderZIndex(): void {
  const header = document.querySelector(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  ) as HTMLElement;

  if (header) {
    header.style.zIndex = '1000';
    console.log('✅ Set header z-index: 1000');
  }
}

function applyHeaderWidth(): void {
  const header = document.querySelector(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  ) as HTMLElement;

  if (header) {
    header.style.width = '100%';
    console.log('✅ Set header width: 100%');
  }
}

function removeNestedHeaders(template: Element): void {
  const nestedHeaders = template.querySelectorAll(
    'nav[class*="qs-header"], header[class*="qs-header"], [data-component="qs-header"]'
  );

  nestedHeaders.forEach((header) => {
    console.log(`Removing nested header from ${template.getAttribute('data-section')}`);
    header.remove();
  });
}

function autoInsertFooter(): void {
  console.log('🔧 Auto-inserting QS/Footer at root...');
  
  // This would integrate with your component system
  // For now, log the action
  console.warn('Auto-insert requires component system integration');
  
  // Example implementation:
  // const footerComponent = document.createElement('footer');
  // footerComponent.className = 'qs-footer-container';
  // footerComponent.setAttribute('data-component', 'qs-footer');
  // document.body.appendChild(footerComponent);
}

function removeDuplicateFooters(): void {
  console.log('🔧 Removing duplicate footers...');
  
  const footers = document.querySelectorAll(
    'footer[class*="qs-footer"], [data-component="qs-footer"]'
  );

  // Keep last footer, remove rest
  for (let i = 0; i < footers.length - 1; i++) {
    console.log(`Removing duplicate footer #${i + 1}`);
    footers[i].remove();
  }
}

function moveFooterToRoot(): void {
  console.log('🔧 Moving footer to root level...');
  
  const footer = document.querySelector(
    'footer[class*="qs-footer"], [data-component="qs-footer"]'
  ) as HTMLElement;

  if (footer && document.body) {
    // Move footer to end of body
    document.body.appendChild(footer);
  }
}

function addFooterSpacing(): void {
  const footer = document.querySelector(
    'footer[class*="qs-footer"], [data-component="qs-footer"]'
  ) as HTMLElement;

  if (footer) {
    // Check if spacing div already exists
    const prevElement = footer.previousElementSibling;
    if (prevElement && prevElement.classList.contains('section-spacing')) {
      console.log('✅ Footer spacing already exists');
      return;
    }

    // Create spacing div
    const spacingDiv = document.createElement('div');
    spacingDiv.className = 'section-spacing';
    footer.parentElement?.insertBefore(spacingDiv, footer);
    console.log('✅ Added section-spacing before footer');
  }
}

function removeNestedFooters(template: Element): void {
  const nestedFooters = template.querySelectorAll(
    'footer[class*="qs-footer"], [data-component="qs-footer"]'
  );

  nestedFooters.forEach((footer) => {
    console.log(`Removing nested footer from ${template.getAttribute('data-section')}`);
    footer.remove();
  });
}

function highlightExisting(element: HTMLElement): void {
  // Scroll to and highlight existing component
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // Add temporary highlight
  element.style.outline = '3px solid #F04438';
  element.style.outlineOffset = '4px';
  
  setTimeout(() => {
    element.style.outline = '';
    element.style.outlineOffset = '';
  }, 3000);
  
  console.log('📍 Highlighted existing component');
}

// ========================================
// Preflight Check Hook for React
// ========================================

export function usePreflightCheck(enabled: boolean = true) {
  if (typeof window === 'undefined' || !enabled) {
    return { result: null, runChecks: () => null };
  }

  const runChecks = () => {
    const result = runAllPreflightChecks();
    
    if (!result.passed) {
      console.group('⚠️ Preflight Check Failed');
      result.errors.forEach(error => console.error('❌', error));
      result.warnings.forEach(warning => console.warn('⚠️', warning));
      console.groupEnd();
      
      // Auto-apply fixes if safe
      const autoFixable = result.fixes.filter(fix => 
        fix.type === 'auto-correct' || fix.type === 'auto-insert'
      );
      
      if (autoFixable.length > 0) {
        console.group('🔧 Auto-Fixing Issues');
        autoFixable.forEach(fix => {
          console.log(`Applying: ${fix.description}`);
          fix.action();
        });
        console.groupEnd();
      }
    } else {
      console.log('✅ All preflight checks passed');
    }
    
    return result;
  };

  // Run checks on mount (development only)
  if (process.env.NODE_ENV === 'development') {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', runChecks);
    }
  }

  return { result: null, runChecks };
}

export default {
  checkHeaderPresence,
  checkHeaderPosition,
  checkFooterPresence,
  checkFooterPosition,
  checkTemplateIntegrity,
  checkComponentDuplication,
  runAllPreflightChecks,
  usePreflightCheck
};
