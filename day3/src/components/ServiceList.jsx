import ServiceCard from "./ServiceCard"



function ServiceList(){
    const services = [
        {id: 1, title: "Frontend development", desc: "Building beautiful UI's"},
        {id: 2, title: "Backend development", desc: "Building strong server side logics"},
        {id: 3, title: "Mobile development", desc: "Building beautiful mobile apps"},
    ]
    return(
        <section className="services-section">
            <h3>Our Services</h3>
            <div className="services-grid">
                {services.map((service) => (
                    <ServiceCard    
                        key={service.id}
                        title={service.title}
                        desc={service.desc}
                    />
                ))}
            </div>
        </section>
    )
}

export default ServiceList;