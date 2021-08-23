import { useState, useEffect } from 'react'
import { API_URL } from '../../constants'
import './styles.css'

export default function Form() {
  const [areasOptions, setAreasOptions] = useState(undefined)
  const [departamentosOptions, setDepartamentosOptions] = useState(undefined)
  const [puestosOptions, setPuestosOptions] = useState(undefined)

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
    console.log('HANDLE--->', e.target.value)
  }

  return (
    <div className="alta-puesto">
      <div className="alta-puesto__container">
        <h1 className="alta-puesto__h1">Alta puesto</h1>
        <div className="alta-puesto__form">
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Área</label>
            <select name="areas" className="alta-puesto__form-select" onChange={handleSelect}>
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
            <select name="departamentos" className="alta-puesto__form-select">
              {departamentosOptions &&
                departamentosOptions.map((departamento, index) => (
                  <option value={departamento.cve_departamento} key={index}>
                    {departamento.desc_departamento}
                  </option>
                ))}
            </select>
          </div>
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Puesto</label>
            <select name="puestos" className="alta-puesto__form-select" onChange={handleSelect}>
              {puestosOptions &&
                puestosOptions.map((puesto, index) => (
                  <option value={puesto.cve_puesto} key={index}>
                    {puesto.desc_puesto}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="alta-puesto__container-button">
          <button className="alta-puesto__button">Guardar</button>
        </div>
      </div>
    </div>
  )
}
