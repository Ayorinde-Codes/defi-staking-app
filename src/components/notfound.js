import React from 'react'
import Footer from './website/footer'
import { Link } from 'react-router-dom'
import Header from './website/header'


export default function Notfound() {
    return (
            <div>
            <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				{/* <h2>Not Found</h2> */}


			</div>
		</div>
	</div>
</div>



<div className="container">
	<div className="row">
		<div className="col-xl-5 offset-xl-3">


			<div className="login-register-page">
				{/* <h2> Not found</h2> */}
				<div align="center">
					<img src="/assets/images/notfound.png" />

					<Link to={"/"}>
						<button className="btn btn-success"> Return Home </button> 
					</Link>
				</div>
			</div>

		</div>
	</div>
</div>
<div className="margin-top-70"></div>

            <Footer />
        </div>
    )
}
