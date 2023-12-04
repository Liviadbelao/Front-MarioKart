const Inputs = ({ tipo, valor, pl, oc}) => {

  return (
    <input type={tipo} value={valor} placeholder={pl} onChange={oc} />
)
}
export default Inputs