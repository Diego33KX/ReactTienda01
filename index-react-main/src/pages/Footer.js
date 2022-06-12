import React from 'react';

const Footer = () => {
    return (
            <footer class="page-footer bg-dark">
                {/* Barra Primera */}
                <div class="bg-success">
                    <div class="container">
                        <div class="row py-4 d-flex align-items-center">
                            <div class="col-md-12 text-center">
                                <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook text-white p-2"></i></a>
                                <a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter text-white p-2"></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i class="bi bi-instagram text-white p-2"></i></a>
                                <a href='https://wa.me/+51979377644' target="_blank"><i class="bi bi-whatsapp text-white p-2"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="container text-center text-md-left mt-5 text-white">
                    <div class="row">
                    {/* Columna numero 1 */}
                        <div class="col-md-3 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold">Descripcion</h6>
                            <hr/>
                            <p class="m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>

                        <div class="col-md-2 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold">Products</h6>
                            <hr/> 
                            <ul class="list-unstyled">
                                <li class="m-2"><a href="/#">Hombres</a></li>
                                <li class="m-2"><a href="/#">Mujeres</a></li>
                                <li class="m-2"><a href="/#">Niños</a></li>
                                <li class="m-2"> <a href="/#">Mundial QATAR 2022</a></li>
                            </ul>
                        </div>
                        {/* Columna numero 2 */}
                        {/* <div class="col-md-2 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold">EN PRUEBA</h6>
                            <hr/>
                            <ul class="list-unstyled">
                                <li class="m-2"><a href="/#">Home</a></li>
                                <li class="m-2"><a href="/#">About</a></li>
                                <li class="m-2"><a href="/#">Services</a></li>
                                <li class="m-2"> <a href="/#">Contact</a></li>
                            </ul>
                        </div> */}
                        {/* Columna numero 3 */}
                        <div class="col-md-3 mx-auto mb-4">
                            <h6 class="text-uppercase font-weight-bold">Contactanos</h6>
                            <hr/>
                            <ul class="list-unstyled">
                                <li class="m-2"><i class="fas fa-home mr-3"></i>Av. Camino Real 208, San Isidro 15073</li>
                                <li class="m-2"><i class="fas fa-envelope mr-3"></i>ContigoPE@gmail.com</li>
                                <li class="m-2"><i class="fas fa-phone mr-3"></i>+51 979 377 644</li>
                                <li class="m-2"><i class="fas fa-print mr-3"></i>+51 973 7324 74</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center py-3 text-white">
                    <p>&copy; Copyright<a href="/#"> ByTeamPython</a></p>
                    <p>EL CHAMO</p>
                </div>


            </footer>
        
    );
}

export default Footer;
