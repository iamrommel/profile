import React from 'react'
import { ClientSettings } from '../config/clientSettings'

export class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-left">
                            <div className="copyright">Copyright &copy; Rommel C.
                                Manalo {(new Date()).getFullYear()} </div>
                            <div className="">
                                <small>v{ClientSettings.version}</small>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="https://github.com/iamrommel" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/manalo.rommel" target="_blank"
                                       rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/rommel-manalo-3521b022" target="_blank"
                                       rel="noopener noreferrer">
                                        <i className="fab fa-linkedin-in"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li className="list-inline-item">
                                    <a href="/privacy-policy">Privacy Policy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/terms-and-condition">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
