let data = {
    "title": "Auxiliar de facturación",
    "job_url": "https://www.elempleo.com/co/ofertas-trabajo/auxiliar-de-facturacion-1886258886?trabajo=Asistente%20de%20Bodega",
    "company": "FINART S.A.S",
    "salary": "$1,5 a $2 millones",
    "location": "Bogotá",
    "publish_date": "Publicado 9 Ago 2024",
    "jobDetails": {
        "title_job": "Auxiliar de facturación",
        "salary": "Auxiliar de facturación",
        "city": "Bogotá",
        "date_pub": "9 Ago 2024",
        "date_ven": "8 Oct 2024",
        "area": "Comercio Exterior",
        "proffesion": "Comercio internacional",
        "name_empresa": "FINART S.A.S",
        "industy_empresa": "Manufactura",
        "empresa_descrip": "Empresa Líder en el mercado de Joyería y accesorios, con más de 25 años de experiencia.",
        "description_job": "Tecnólogo en comercio exterior, o en procesos industriales con 1 año de experiencia en en despachos, logística y facturación \nExcel avanzado - SAP\nLunes a viernes de 7-5 pm Fontibón \nindefinido \nsalario 1805888",
        "palabra_clave": "",
        "cargos": [
            "Asistente despachos",
            "Auxiliar de logística"
        ],
        "img_empresa": "https://www.elempleo.com/resources/Content/dist/images/areas/JobsOffers/JobOfferDetail/icono-empresa-confidencial.jpg"
    },
    "jobDescription": "## ¡Organiza el flujo de tu logística! Auxiliar de Despachos en SELIGO SAS\n\n¿Te apasiona la logística y te gusta trabajar en un ambiente dinámico y retador? ¿Eres un experto en el manejo de información y la coordinación de entregas? ¡Entonces SELIGO SAS te está buscando!\n\nEn SELIGO SAS, nos dedicamos a brindar soluciones de consultoría y asesoría, y buscamos a un auxiliar de despachos que se una a nuestro equipo para asegurar la eficiencia y la calidad en nuestras operaciones de transporte. \n\n**Un día en la vida de nuestro Auxiliar de Despachos:**\n\nTu día a día estará lleno de acción, ¡no habrá un momento aburrido! Tendrás la oportunidad de:\n\n* **Mantener el control total de las entregas:** Gestionar la información de las entregas en ruta en el sistema EAD, asegurándote de que todo fluya sin contratiempos.\n* **Comunicación clave:** Ser el enlace entre la oficina y los conductores, manteniendo una comunicación constante para garantizar que las entregas se realicen a tiempo y sin ningún problema.\n* **Organización del flujo:** Apoyar en el proceso de despacho, desde la elaboración de solicitudes de transporte hasta la coordinación de cargues y embarques.\n\n**¿Te identificas con estas características?**\n\n* Experiencia comprobada en el sector transporte terrestre de carga masiva, ¡es un requisito indispensable!\n* Manejo de Excel intermedio, ¡vamos a trabajar con datos!\n* Experiencia en sistemas de gestión logística, ¡preferiblemente SILOGTRANS!\n* ¡Tus habilidades de comunicación serán tu mayor arma!\n\n**Beneficios que te harán amar tu trabajo:**\n\n* Salario competitivo: $1.600.000 + auxilio de transporte.\n* Modalidad presencial en nuestras oficinas de Montevideo.\n* Contrato a término fijo por 3 meses, ¡con posibilidad de renovación y de pasar a indefinido después de un año!\n* Horario de trabajo: Lunes a viernes de 8 am a 5 pm y sábados de 8 am a 12 pm.\n\n**¡Si eres un apasionado por la logística y quieres formar parte de un equipo dinámico, no dudes en postular!**\n\n**Envíanos tu hoja de vida y déjanos conocer tu experiencia.**\n\n**SELIGO SAS te espera.**",
    "miniDescription": "**FINART S.A.S**, empresa líder en la industria de **Manufactura** de joyería y accesorios, busca un **Auxiliar de facturación** con experiencia en **despachos, logística y facturación**. Si eres un profesional **Tecnólogo en comercio exterior o en procesos industriales** con **Excel avanzado** y conocimiento en **SAP**, te invitamos a formar parte de nuestro equipo.  Tu labor será clave en la gestión eficiente de nuestros procesos de exportación,  trabajando en un ambiente dinámico en nuestro centro de operaciones en **Fontibón**, Bogotá, en un horario de **Lunes a Viernes de 7:00 am a 5:00 pm**.  ¡Postúlate y comienza a construir tu futuro profesional con nosotros!",
    "category": "Administración"
}

// Instanciar el convertidor de Markdown a HTML con soporte para tablas
const converter = new showdown.Converter({ tables: true });

let rawText = data.jobDescription

// Convertir el texto Markdown a HTML
const html = converter.makeHtml(rawText);

// Insertar el HTML en el contenedor
document.getElementById('content').innerHTML = html;