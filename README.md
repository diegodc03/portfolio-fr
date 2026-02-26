# 🚀 Portfolio Pro - CV Interactivo

Este proyecto es una aplicación web moderna diseñada como un Currículum Vitae interactivo y portafolio dinámico. Desarrollado con **Angular 18+**, el enfoque principal ha sido la gestión eficiente de componentes, reactividad mediante **Signals** y una infraestructura escalable en la nube.

🔗 **Link del Proyecto:** [https://d3tuatun7xow9z.cloudfront.net/](https://d3tuatun7xow9z.cloudfront.net/)

---

## 🛠️ Tecnologías y Características Técnicas

### **Frontend (Angular 18)**
* **Signals & Reactivity:** Uso intensivo de `computed`, `effect` e `inputs` reactivos para una gestión de estado eficiente.
* **Standalone Components:** Arquitectura moderna sin módulos para mejorar la mantenibilidad y el tiempo de carga.
* **Angular Material:** Implementación de componentes UI como `mat-expansion-panel` y `mat-accordion` con personalización de temas mediante SCSS.
* **Responsive Design:** Galería de fotos dinámica distribuida en 4 columnas con adaptación automática a dispositivos móviles.

### **Infraestructura y Cloud**
* **Amazon S3:** Hosting de los archivos estáticos de la aplicación (SPA).
* **Amazon CloudFront:** Configurado como CDN para asegurar baja latencia y servir el contenido a través de HTTPS de forma global.



---

## 🔄 Integración Continua (CI/CD)

El proyecto está diseñado bajo una cultura DevOps, utilizando **GitHub Actions** para automatizar el ciclo de vida del despliegue:

1.  **Build:** Validación del código y generación del bundle de producción.
2.  **Sincronización:** Despliegue automático de los archivos al bucket de **S3** tras cada `push` a la rama principal.
3.  **Invalidación:** Limpieza automática de la caché de **CloudFront** para asegurar que los usuarios vean siempre la última versión.

---

## 🎯 Roadmap: Próximos Pasos

El proyecto se encuentra en fase de evolución constante con los siguientes objetivos:

1.  **Backend & Database:** Implementación de una API REST y base de datos para centralizar la gestión de proyectos, experiencias y archivos multimedia, eliminando la dependencia de datos estáticos (`JSON/Signals`).
2.  **Servidor Propio:** Migración a una infraestructura bajo control total para mejorar las labores de administración de sistemas (SysAdmin).
3.  **Optimización de Media:** Mejora en el procesamiento y carga de imágenes de alta resolución mediante servidores propios, optimizando los tiempos de respuesta y la experiencia de usuario.

---

## 🔧 Instalación Local

Si deseas ejecutar este proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/diegodc03/portfolio-fr.git](https://github.com/diegodc03/portfolio-fr.git)
