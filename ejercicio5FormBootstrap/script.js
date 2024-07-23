document.addEventListener('DOMContentLoaded', (event) => {
                      const formulario = document.getElementById('formulario');
                    
                      formulario.addEventListener('submit', (event) => {
                        event.preventDefault(); // Evitar el envío inmediato del formulario
                    
                        const nombre = document.getElementById('nombre').value;
                        const apellido = document.getElementById('apellido').value;
                        const email = document.getElementById('email').value;
                        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
                        const paisResidencia = document.getElementById('paisResidencia').value;
                    
                        // Validación de nombre y apellido (solo letras y espacios con expresiones regulares)
                        if (!/^[a-zA-Z ]+$/.test(nombre) || !/^[a-zA-Z ]+$/.test(apellido)) {
                          alert('Nombre y apellido deben contener solo letras y espacios.');
                          return;
                        }
                    
                        // Validación de correo electrónico (formato correcto)
                        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
                          alert('Correo electrónico inválido. Debe seguir el formato: nombre@dominio.com');
                          return;
                        }
                    
                        // Validación de fecha de nacimiento (mayor de 18 años)
                        const fechaNacimientoActual = new Date();
                        const fechaNacimientoMin = new Date(
                          fechaNacimientoActual.getFullYear() - 18,
                          fechaNacimientoActual.getMonth(),
                          fechaNacimientoActual.getDate()
                        );
                        const fechaNacimientoUsuario = new Date(fechaNacimiento);
                        if (fechaNacimientoUsuario > fechaNacimientoMin) {
                          alert('Debes tener al menos 18 años para enviar el formulario.');
                          return;
                        }
                    
                        // Validación de país de residencia (seleccionado)
                        if (paisResidencia === '') {
                          alert('Por favor, seleccione un país de residencia.');
                          return;
                        }
                    
                        // Si todas las validaciones son correctas, se permite el envío del formulario
                        formulario.submit();
                      });
                    
                      document.getElementById('estilo-uno-btn').addEventListener('click', aplicaEstiloUno);
                      document.getElementById('alto-contraste-btn').addEventListener('click', aplicaEstiloAltoContraste);
                    
                      function aplicaEstiloUno() {
                        document.getElementById('form-container').classList.remove('alto-contraste');
                        document.getElementById('form-container').classList.add('estilo-uno');
                      }
                    
                      function aplicaEstiloAltoContraste() {
                        document.getElementById('form-container').classList.remove('estilo-uno');
                        document.getElementById('form-container').classList.add('alto-contraste');
                      }
                    });
                    