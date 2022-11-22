          <Formik
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              pass: "",
              checkPass: "",
            }}
            validate={(valores) => {
              let errors = {};

              if (!valores.name) {
                errors.name = "Por favor ingresa un nombre.";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                errors.name = "Ingrese un nombre válido.";
              }

              if (!valores.lastName) {
                errors.lastName = "Por favor ingrese un apellido.";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.lastName)) {
                errors.lastName = "Ingrese un apellido válido";
              }

              if (!valores.email) {
                errors.email = "Por favor ingrese un correo electrónico.";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  valores.email
                )
              ) {
                errors.email = "Ingrese un correo electrónico válido";
              }

              if (!valores.pass) {
                errors.pass = "Por favor ingrese un contraseña.";
              } else if (/\s/.test(valores.pass)){
                console.log(/\s/.test(valores.pass));
                errors.pass = "La contraseña no puede tener espacios."
              }
              
              
              // else if (
              //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/.test(
              //       valores.pass
              //     )
              //   ){
              //   errors.pass = "Debe contener al menos: un caracter especial, una mayuscula, un numero y tener 8-15 caract. (sin espacios)";
              // }

              if (!valores.checkPass) {
                errors.checkPass = "Por favor confirme su contraseña.";
              } else if (
                valores.pass !== valores.checkPass
                )
               {
                errors.checkPass = "Las contraseñas no coinciden.";
              }

              return errors;
            }}
            onSubmit={(valores, {resetForm}) => {
              console.log(valores);
              console.log("formulario enviado.");
              resetForm()
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Nombre/s"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={20}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Apellido/s"
                      id="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={20}
                    />
                  </div>
                  {touched.lastName && errors.lastName && (
                    <Form.Text className="text-danger">
                      {errors.lastName}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su correo electrónico."
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={35}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <Form.Text className="text-danger">
                      {errors.email}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese su contraseña."
                      id="pass"
                      value={values.pass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={15}
                    />
                  </div>
                  {touched.pass && errors.pass && (
                    <Form.Text className="text-danger">{errors.pass}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className="d-flex">
                    <div className="d-flex align-items-center justify-content-center color-icon">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Confirme su contraseña."
                      id="checkPass"
                      value={values.checkPass}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={15}
                    />
                  </div>
                  {touched.checkPass && errors.checkPass && (
                    <Form.Text className="text-danger">
                      {errors.checkPass}
                    </Form.Text>
                  )}
                </Form.Group>
                <div className="d-flex justify-content-center w-75 mx-auto">
                  <button className="btn-init-custom" type="submit">
                    Registrarme
                  </button>
                </div>
              </Form>
            )}
          </Formik>