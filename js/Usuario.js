class Usuario {

    act = false;
    idAct = 0;

    constructor(id, documento, nombres, correo, telefono, direccion, nombreUsuario, contrasena) {
        this.id = id;
        this.documento = documento;
        this.nombres = nombres;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
    }


    agregarUsuario(contador){
        const idH = contador
        const nombresH = document.getElementById('names').value;
        const documentoH = document.getElementById('documento').value;
        const correoH = document.getElementById('email').value;
        const telefonoH = document.getElementById('telefonou').value;
        const direccionH = document.getElementById('direccion').value;
        const nombreUsuarioH = document.getElementById('username').value;
        const contrasenaH = document.getElementById('pwd1').value;
        const usuario = new Usuario(idH, documentoH, nombresH, correoH, telefonoH, direccionH, nombreUsuarioH, contrasenaH);

        this.cantidad+=1;
        const usuarioJSON = JSON.stringify(usuario);
        window.localStorage.setItem('usuario'+usuario.id,usuarioJSON);
        this.listarUsuarios();
        this.limpiarRegistro();

    }

    listarUsuarios(){
        this.vaciarLista();
        for(var i = 1; i <= localStorage.length; i++) {
            const usuario = 'usuario'+ i;
            const usuarioJSON = JSON.parse(localStorage.getItem(usuario));
            if(usuarioJSON!=null) {
                document.getElementById('tbodyU').innerHTML += '<tr><td>'+usuarioJSON.id+'</td><td>'+
                usuarioJSON.documento+'</td><td>'+usuarioJSON.nombres+'</td><td>'+usuarioJSON.correo+
                '</td><td>'+usuarioJSON.telefono+'</td><td>'+usuarioJSON.direccion+'</td><td>'+
                usuarioJSON.nombreUsuario+'</td><td>'+usuarioJSON.contrasena+'</td>'+
                '<td><button type="button" class="btn btn-warning" onclick="actualizarUsuario('+usuarioJSON.id+');">Actualizar</button></td>'+
                '<td><button type="button" class="btn btn-danger" onclick="eliminarUsuario('+usuarioJSON.id+');">Eliminar</button></td>'+
                '</tr>';
            }
            
        }
    }

    actualizarUsuario(id){
        window.location.href='#registro';

        if(this.act==false) {
            const usuario = 'usuario' + id;
            const usuarioJSON = JSON.parse(localStorage.getItem(usuario));
        
            document.getElementById('documento').value = usuarioJSON.documento;
            document.getElementById('names').value = usuarioJSON.nombres;
            document.getElementById('email').value = usuarioJSON.correo;
            document.getElementById('telefonou').value = usuarioJSON.telefono;
            document.getElementById('direccion').value = usuarioJSON.direccion;
            document.getElementById('username').value = usuarioJSON.nombreUsuario;
            document.getElementById('pwd1').value = usuarioJSON.contrasena;
            document.getElementById('pwd2').value = usuarioJSON.contrasena;
            this.idAct = id;
            this.act = true;
        } else {

            const tabla = document.getElementById('tablaU');
            for (var i = 0; i < tabla.rows.length; i++) {
                if(tabla.rows[i].cells[0].innerText == id) {
                    const usuario = this.objetoUsuario(contador);   
                    const usuarioJSON = JSON.stringify(usuario);
                    localStorage.setItem('usuario'+id,usuarioJSON);
                    tabla.rows[i].cells[1].innerText = document.getElementById('documento').value;
                    tabla.rows[i].cells[2].innerText = document.getElementById('names').value;
                    tabla.rows[i].cells[3].innerText = document.getElementById('email').value;
                    tabla.rows[i].cells[4].innerText = document.getElementById('telefonou').value;
                    tabla.rows[i].cells[5].innerText = document.getElementById('direccion').value;
                    tabla.rows[i].cells[6].innerText = document.getElementById('username').value;
                    tabla.rows[i].cells[7].innerText = document.getElementById('pwd1').value;
                    this.idAct = 0;
                    this.act = false;
                    break;

                }
                
            }


        }
        

        
    }

    

    eliminarUsuario(id) {
        const tabla = document.getElementById('tablaU');
        for (var i = 0; i < tabla.rows.length; i++) {
            if(tabla.rows[i].cells[0].innerText == id) {
                tabla.deleteRow(i);
                break;
            }
            
        }

        window.localStorage.removeItem('usuario' + id);
        this.cantidad-=1;
    }

    objetoUsuario(id) {
        const idH = id;
        const documentoH = document.getElementById('documento').value;
        const nombresH = document.getElementById('names').value;
        const correoH = document.getElementById('email').value;
        const telefonoH = document.getElementById('telefonou').value;
        const direccionH = document.getElementById('direccion').value;
        const nombreUsuarioH = document.getElementById('username').value;
        const contrasenaH = document.getElementById('pwd1').value;

        const usuario = new Usuario(idH, documentoH, nombresH, correoH, telefonoH, direccionH, nombreUsuarioH, contrasenaH);
        return usuario;
    }

    vaciarLista() {
        const tabla = document.getElementById('tablaU');
        const tb = tabla.rows.length -1;

        for (let i = tb; i > 0; i--) {
            tabla.deleteRow(i);
        }
        
    }

    limpiarRegistro() {
        document.getElementById('documento').value = '';
        document.getElementById('names').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefonou').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('username').value = '';
        document.getElementById('pwd1').value = '';
        document.getElementById('pwd2').value = '';
    }

    buscar(opcion){
        const buscar = document.getElementById(opcion).value;
        for(var i = 1; i <= contador; i++) {
            const usuario = 'usuario' + i;
            const usuarioJSON = JSON.parse(localStorage.getItem(usuario));
  
            if(usuarioJSON!=null){
                switch (opcion) {
                    case "documento":
                        if(buscar == usuarioJSON.documento) {
                            return true;
                        }
                    break;
                    case "email":
                        if(buscar == usuarioJSON.correo) {
                            return true;
                        }
                    break;
                    case "username":
                        if(buscar == usuarioJSON.nombreUsuario) {
                            return true;
                        }
                    break;
                    
                }
            }
              
        }
        return false;
    }

    
}