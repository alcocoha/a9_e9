import { useState, useEffect } from 'react'
import { API_URL } from '../../constants'
import './styles.css'

export default function Form() {
  const [areasOptions, setAreasOptions] = useState(undefined)
  const [departamentosOptions, setDepartamentosOptions] = useState(undefined)
  const [puestosOptions, setPuestosOptions] = useState(undefined)
  const [selectsValue, setSelectsValue] = useState({
    area: null,
    departamento: null,
    puesto: null,
  })

  useEffect(() => {
    fetch(`${API_URL}buscarArea`)
      .then((resp) => resp.json())
      .then((data) => setAreasOptions(data))

    fetch(`${API_URL}buscarDepartamento`)
      .then((resp) => resp.json())
      .then((data) => setDepartamentosOptions(data))

    fetch(`${API_URL}buscarPuesto`)
      .then((resp) => resp.json())
      .then((data) => setPuestosOptions(data))
  }, [])

  const handleSelect = (e) => {
    setSelectsValue({
      ...selectsValue,
      [e.target.name]: e.target.value,
    })
  }

  const buildDepartamentosOptions = () =>
    departamentosOptions
      ?.filter((item) => parseInt(selectsValue.area) === parseInt(item.cve_area))
      .map((departamento, index) => (
        <option value={departamento.cve_departamento} key={index}>
          {departamento.desc_departamento}
        </option>
      ))

  const buildPuestosOptions = () =>
    puestosOptions
      ?.filter((item) => parseInt(selectsValue.departamento) === parseInt(item.cve_departamento))
      .map((puesto, index) => (
        <option value={puesto.cve_puesto} key={index}>
          {puesto.desc_puesto}
        </option>
      ))

  const sendPuesto = () => {
    const data = {
      cve_departamento: selectsValue.departamento,
      cve_puesto: String(puestosOptions.length + 1),
      desc_puesto: selectsValue.puesto,
      fecha_creacion: new Date(Date.now()).toLocaleDateString(),
      departamento_cve_area: selectsValue.area,
    }

    console.log('DATA', data)

    fetch(`${API_URL}/puestos/guardarPuesto`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div className="alta-puesto">
      <div className="alta-puesto__container">
        <h1 className="alta-puesto__h1">Alta puesto</h1>
        <div className="alta-puesto__form">
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">??rea</label>
            <select name="area" className="alta-puesto__form-select" onChange={handleSelect}>
              <option value={null}>Selecciona una opci??n</option>
              {areasOptions &&
                areasOptions.map((area, index) => (
                  <option value={area.cve_area} key={index}>
                    {area.desc_area}
                  </option>
                ))}
            </select>
          </div>
          <div className="alta-puesto__form-item" onChange={handleSelect}>
            <label className="alta-puesto__form-label">Departamento</label>
            <select name="departamento" className="alta-puesto__form-select">
              <option value={null}>Selecciona una opci??n</option>
              {buildDepartamentosOptions()}
            </select>
          </div>
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Puesto</label>
            <input type="text" name="puesto" onChange={handleSelect}/>
          </div>
        </div>
        <div className="alta-puesto__container-button">
          <button className="alta-puesto__button" onClick={sendPuesto}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}
