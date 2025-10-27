import imgGroup from "figma:asset/2c0766c06d80d2d7c97d5c3c3a067e0cc6897c0d.png";

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGroup} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <div className="absolute inset-0" data-name="Rectangle" style={{ backgroundColor: 'var(--qs-brand-primary)' }} />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group2 />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <MaskGroup />
    </div>
  );
}

export default function ClipPathGroup() {
  return (
    <div className="relative size-full" data-name="Clip path group">
      <Group5 />
    </div>
  );
}