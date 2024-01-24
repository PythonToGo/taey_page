// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//     const { email, message } = req.body;

//   // Configure Nodemailer to use your email service (e.g., Gmail)
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password',
//         },
//     });

//   // Email data
//     const mailOptions = {
//         from: 'your-email@gmail.com',
//         to: 'your-destination-email@example.com',
//         subject: 'New Contact Form Submission',
//         text: `Email: ${email}\nMessage: ${message}`,
//     };

//   // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ success: false, error: 'Failed to send email' });
//         } else {
//         console.log('Email sent:', info.response);
//         res.status(200).json({ success: true, message: 'Email sent successfully' });
//         }
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


import Layout from "@/components/layout";

export default function Contacts() {
    return (
        <Layout>
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Munich&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: 'saturate(1) contrast(1.2) opacity(0.4)' }}></iframe>
                </div>
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Feel free to reach out! I am always open to discussing new projects, collaborations, or just having a chat about technology and engineering. You can contact me via email or through my DM link below.</p>
                        {/* <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div> */}
                        <a href="mailto:pythontogoplease@gmail.com" className="text-gray-600 ml-1">
                            <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                                Contact Me by Email
                            </button>
                        </a>
                        
                        <p className="text-xs text-gray-500 mt-3">Love Hedgehog @PythonToGo </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
