const targetInner = document.querySelector('.main__inner');

const observ = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        };
    });
});

observ.observe(targetInner);

const targetServices = document.querySelector('.services__inner');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        };
    });
});

observer.observe(targetServices);

const targetCustom = document.querySelector('.customer__inner');

const observeri = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        };
    });
});

observeri.observe(targetCustom);

const targetConnect = document.querySelector('.connect__inner');

const connect = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        };
    });
});

connect.observe(targetConnect);

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
};

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
};