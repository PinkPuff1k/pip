const data = {
    information: [
        {
            price: '860 Br.',
            planeType: 'Boeing 737-8',
            departureTime: '22:30',
            departureCityInfo: 'Минск, 17 апр.',
            arrivalTime: '14:20',
            arrivalCityInfo: 'Анталья, 18 апр.'
        },
        {
            price: '1065 Br.',
            planeType: 'Embraer 195',
            departureTime: '21:10',
            departureCityInfo: 'Минск, 17 апр.',
            arrivalTime: '07:25',
            arrivalCityInfo: 'Анталья, 18 апр.'
        },
        {
            price: '1040 Br.',
            planeType: 'Boeing 737-300',
            departureTime: '06:00',
            departureCityInfo: 'Минск, 17 апр.',
            arrivalTime: '16:50',
            arrivalCityInfo: 'Анталья, 17 апр.'
        },
    ]
}
const dom = {
    price: document.getElementById('price'),
    select: document.getElementById('select'),
    info: {
        planeType: document.getElementById('plane-type'),
        departureTime: document.getElementById('departure-time'),
        departureCityInfo: document.getElementById('departure-city-info'),
        arrivalTime: document.getElementById('arrival-time'),
        arrivalCityInfo: document.getElementById('arrival-city-info'),
    },
}

// let ticketsCount = data.information.length;
let step = 0;

function render() {
    dom.price.innerHTML = step + 1;
}

function renderTicket(step) {
    render( step);
    renderPrice();
    renderFlightInformation(step);
    

}
renderTicket(step);

function renderPrice() {
    dom.price.innerHTML = data.information[step].price
}

function renderFlightInformation(step) {
    dom.info.innerHTML = data.information[step].info
}