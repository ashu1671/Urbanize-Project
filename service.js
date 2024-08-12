document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get('id');

    fetch('services.json')
        .then(response => response.json())
        .then(services => {
            const service = services.find(s => s.id === serviceId);
            if (service) {
                document.getElementById('headingservice').innerText = service.name;
                document.getElementById('service-img').src = service.image;
                document.getElementById('service-name').innerText = service.name;
                document.getElementById('moneyforservice').innerText = ` ${service.price} onwards`;
            } else {
                document.getElementById('headingservice').innerText = 'Service Not Found';
            }
        });
});
