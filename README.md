Estructura de ramas implementada
main (rama principal)
develop (Rama de desarrollo)
feature/operadores-calcula-propina (rama de funcionalidad)

Comandos utilizados para creacion y manejo de rama 
git init (creacion de repositorio)
git checkout -b develop (crea rama develop)
git checkout -b feature/operadores-calcula-propina ( crear rama de feature)

Comandos de Fusion de Ramas
git checkout develop (cambiar a rama develop)
git merge feature/operadores-calcula-propina ( fusionar feature en develop)
git add .
git commir -m "integrar feature de calculadora de propina)

Proceso de sincronizacion local con Remoto
git remote add origin https://github.com/JuanJGM-08/fund-prog-js.git ( agregar repositorio remoto)
git remote -v (verificar remoto configurado)
git push -u origin feature/operadores-calcula-propina
COMANDOS DE SINCRONIZACION REGULAR
git fetch origin (descargar ultimos cambios)
git pull origin develop ( actualizar la rama local)
git push origin feature/operadores-calucla-propina

Retos enfrentados y aprendizaje clave
validacion de parametros (veirificar que ambos parametros sean numeros)
precision en los calculos ( monto * porcentaje) / 100 
Aprendizajes clave:
Estructura de Ramas
Trabajo con commits
Trabajo aislado

Comandos de ejecucion y Prueba
cd fund-prog-js ( Navegar al directorio del proyectco)
node index.js (Ejecutar el arcivho JavaScript)

Verificar el Estado de git
git status (ver estado actual)
git log --oneline ( Ver historial de commits)
git branch (ver ramas existentes
