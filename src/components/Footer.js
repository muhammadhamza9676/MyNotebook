import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-center text-white">

                <div className="container p-3">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-facebook-f"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-twitter"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-google"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-instagram"></i></a>

                    </section>

                    <section className="">
                        <form action="">

                            <div className="row d-flex justify-content-center">

                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example21">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">

                                    <button className="btn btn-outline-light mb-3">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section className="mb-3">
                        <p>
                        My-Notebook application is a versatile tool designed to help users organize, manage, and capture their thoughts, ideas, and important information effectively. It provides a simple and intuitive interface that empowers users to seamlessly create, edit, and access notes across multiple devices.
                        </p>
                    </section>

                </div>

                <div className="text-center p-3">
                    © 2023 Copyright:
                    <a className="text-white" href="#"> My-Notebook.com</a>
                </div>
            </footer>
            </>
  )
}

export default Footer
