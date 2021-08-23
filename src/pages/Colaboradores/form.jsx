import { useState, useEffect } from 'react'
import { API_URL } from '../../constants'
import './styles.css'

export default function Form() {
  const [proyectosOptions, setProyectosOptions] = useState(undefined)
  const [puestosOptions, setPuestosOptions] = useState(undefined)
  const [selectsValue, setSelectsValue] = useState({
    paterno: null,
    materno: null,
    primerNombre: null,
    segundoNombre: null,
    tercerNombre: null,
    rfc: null,
    claveEmpleado: null,
    proyecto: null,
    puesto: null,
    estatus: null,
    jefe: null,
    accedeSistema: null,
    password: null,
    actaNacimiento: null,
    recomendacionLaboral: null,
    comprobanteDomicilio: null,
    comprobanteEstudios: null,
  })

  useEffect(() => {
    fetch(`${API_URL}buscarProyecto`)
      .then((resp) => resp.json())
      .then((data) => setProyectosOptions(data))

    fetch(`${API_URL}buscarPuesto`)
      .then((resp) => resp.json())
      .then((data) => setPuestosOptions(data))
  }, [])

  const handleChange = (e) => {
    setSelectsValue({
      ...selectsValue,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangeCheck = (e) => {
    console.log('--->', e.target.value)
    setSelectsValue({
      ...selectsValue,
      [e.target.name]: e.target.check,
    })
  }

  const sendPuesto = () => {
    console.log("selectsValue-->", selectsValue)
    // const { desc_puesto: descPuesto, departamento_cve_area: departamentoCVEArea } =
    //   puestosOptions.find((item) => parseInt(item.cve_puesto) === parseInt(selectsValue.puesto))
    // const data = {
    //   cve_departamento: selectsValue.departamento,
    //   cve_puesto: selectsValue.puesto,
    //   desc_puesto: descPuesto,
    //   fecha_creacion: new Date(Date.now()).toLocaleDateString(),
    //   departamento_cve_area: departamentoCVEArea,
    // }

    // console.log('DATA', data)

    // fetch(`${API_URL}/puestos/guardarPuesto`, {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
  }

  return (
    <div className="alta-puesto">
      <div className="alta-puesto__container">
        <h1 className="alta-puesto__h1">Colaboradores</h1>

        <div className="alta-puesto__form">
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Paterno</label>
            <input type="text" name="paterno" onChange={handleChange}/>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Materno</label>
            <input type="text" name="materno" onChange={handleChange}/>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Primer nombre</label>
            <input type="text" name="primerNombre" onChange={handleChange}/>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Segundo nombre</label>
            <input type="text" name="segundoNombre" onChange={handleChange}/>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Tercer nombre</label>
            <input type="text" name="tercerNombre" onChange={handleChange}/>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">RFC</label>
            <input type="text" name="rfc" onChange={handleChange}/>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Clave empleado</label>
            <input type="text" name="claveEmpleado" onChange={handleChange}/>
          </div>
        </div>

        <div className="alta-puesto__form">
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Proyecto</label>
            <select name="proyecto" className="alta-puesto__form-select" onChange={handleChange}>
              <option value={null}>Selecciona una opción</option>
              {proyectosOptions?.map((proyecto, index) => (
                <option value={proyecto.cve_proyecto} key={index}>
                  {proyecto.desc_proyecto}
                </option>
              ))}
            </select>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Puesto</label>
            <select name="puesto" className="alta-puesto__form-select" onChange={handleChange}>
              <option value={null}>Selecciona una opción</option>
              {puestosOptions?.map((puesto, index) => (
                  <option value={puesto.cve_puesto} key={index}>
                    {puesto.desc_puesto}
                  </option>
                ))}
            </select>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Estatus</label>
            <select name="estatus" className="alta-puesto__form-select" onChange={handleChange}>
              <option value={null}>Selecciona una opción</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">Jefe Inmediato</label>
            <input type="text" name="jefe" onChange={handleChange}/>
          </div>
        </div>

        <div className="alta-puesto__form">
          <div className="alta-puesto__form-item">
            <label className="alta-puesto__form-label">
              Accede Sistema <input type="checkbox" name="accedeSistema" onChange={handleChangeCheck}></input>
            </label>
            <input type="password" name="password" placeholder="Password"  onChange={handleChange}/>
          </div>
        </div>

        <h2>Documentos</h2>
        <div className="alta-puesto__form">
          <div className="alta-puesto__form-check">
            <label className="alta-puesto__form-label">Acta de nacimiento</label>
            <input type="checkbox" name="actaNacimiento" onChange={handleChangeCheck}/>
          </div>
          <div className="alta-puesto__form-check">
            <label className="alta-puesto__form-label">Recomendación laboral</label>
            <input type="checkbox" name="recomendacionLaboral" onChange={handleChangeCheck}/>
          </div>
          <div className="alta-puesto__form-check">
            <label className="alta-puesto__form-label">Comprobante de domicilio</label>
            <input type="checkbox" name="comprobanteDomicilio" onChange={handleChangeCheck}/>
          </div>
          <div className="alta-puesto__form-check">
            <label className="alta-puesto__form-label">Comprobante de estudios</label>
            <input type="checkbox" name="comprobanteEstudios" onChange={handleChangeCheck}/>
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
