const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];
type TipPercentageFormProps = {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};
export default function TipPercentageForm({ tip, setTip}: TipPercentageFormProps) {
  return (
    <>
     <div className="space-y-3">
     <h3 className="text-bold text-slate-700 text-xl font-bold">Propinas</h3>
      <form>
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id} className="flex gap-2">
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              type="radio"
              id={tipOptions.id}
              name="tip"
              value={tipOptions.value}
              onChange={e=> setTip(+e.target.value)}
              checked={tipOptions.value=== tip}
            />
          </div>
        ))}
      </form>
     </div>
    </>
  );
}
