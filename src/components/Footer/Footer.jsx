import React from "react";
import "../Footer/Footer.css";



const Footer = () => {
    return (

        <div className="text-center text-white conteiner-footer">
            <div className="container pt-4">
                <div className="mb-4">
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-facebook-f"><img src={'/images/' + 'instagram.png'} className="card-img-top  img-redes" width="150px" alt="instagram" /></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://es-la.facebook.com/" target="_blank" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-twitter"><img src={'/images/' + 'facebook.png'} className="card-img-top  img-redes" width="150px" alt="facebook" /></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://twitter.com/i/flow/login" target="_blank" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-google"><img src={'/images/' + 'twitter.png'} className="card-img-top  img-redes" width="150px" alt="twitter" /></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://web.whatsapp.com/" target="_blank" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-instagram"><img src={'/images/' + 'Whatsapp.png'} className="card-img-top  img-redes" width="150px" alt="whatsapp" /></i>
                    </a>
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.google.com/intl/es/gmail/about/" target="_blank" role="button" data-mdb-ripple-color="dark">
                        <i className="fab fa-linkedin"><img src={'/images/' + 'gmail.png'} className="card-img-top  img-redes" width="150px" alt="gmail" /></i>
                    </a>
            </div>
            </div>
                <div className="text-center text-dark p-3">
                    <p>Estilo es usar lo que te hace sentir bien! </p> 
                </div>
        </div>
    )
};

export default Footer;