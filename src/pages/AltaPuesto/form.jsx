import { useState, useEffect } from 'react'
import { getData } from '../../api'
import './styles.css'

export default function Form() {
  const [areasOptions, setAreasOptions] = useState(undefined)
  const [departamentosOptions, setDepartamentosOptions] = useState(undefined)
  const [puestosOptions, setPuestosOptions] = useState(undefined)

  useEffect(() => {
    ;(async () => {
      const areas = await getData('buscarArea')
      setAreasOptions(areas)
      const departamentos = await getData('buscarDepartamento')
      setDepartamentosOptions(departamentos)
      const puestos = await getData('buscarPuesto')
      setPuestosOptions(puestos)
    })()
  }, [])

  const handleSelect = (e) => {
    console.log("HANDLE--->", e.target.value)
  }

  return (
    <div className="alta-puesto">
      <div className="alta-puesto__container">
        <h1 className="alta-puesto__h1">Alta puesto</h1>
        <div className="alta-puesto__form">
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">
              Área
            </label>
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
            <label className="alta-puesto__form-label">
              Departamento
            </label>
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
            <label className="alta-puesto__form-label">
              Puesto
            </label>
            <select name="puestos" className="alta-puesto__form-select"  onChange={handleSelect}>
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
