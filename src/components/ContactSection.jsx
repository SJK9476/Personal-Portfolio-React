import React, {useState} from 'react';
import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone, Send, Twitch,
    Twitter
} from "lucide-react";
import {cn} from "../lib/utils.js";
import emailjs from "emailjs-com";

const ContactSection = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })
    const SERVICE_ID = "service_aj9zcjj";
    const TEMPLATE_ID = "template_gdqao1a";
    const PUBLIC_KEY = "5EnwQvoc5mnRNqdaB";
    const handleSubmit =  (event) => {
        event.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, PUBLIC_KEY).then((result) => {
            alert("Message sent successfully. Thanks for getting in touch!")
            setFormData({name: "", email: "",   message: ""})
        }).catch((err) => {
            alert("Uh Oh something went wrong. Please try again.");
            console.error(err)
        });
    }

    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a team in need of a new Junior Developer? Feel free to
                    reach out. I'd love to discuss any new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="mx-auto">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:samueljamesking94@gmail.com"
                                       className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Samueljamesking94@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="mx-auto">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+447463648597"
                                       className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        +44 74636 48597
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="mx-auto">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Birmingham, UK
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With
                                Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/samuel-king-2a8ba8237/"
                                   target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://x.com/SamJamesK"
                                   target="_blank">
                                    <Twitter/>
                                </a>
                                <a href="https://www.instagram.com/samueljamesk94/"
                                   target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="https://www.twitch.tv/kingsj76"
                                   target="_blank">
                                    <Twitch/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form action="" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-medium mb-2">Your
                                    Name</label>
                                <input type="text" id="name" name="name" value={formData.name}
                                       placeholder="Enter your name..."
                                       onChange={(event) => setFormData({...formData, name: event.target.value})}
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>

                            </div>
                            <div>
                                <label htmlFor="email"
                                       className="block text-sm font-medium mb-2">Your
                                    Email</label>
                                <input type="email" id="email" name="email" value={formData.email}
                                       placeholder="Enter your email..."
                                       onChange={(event) => setFormData({...formData, email: event.target.value})}
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"/>
                            </div>
                            <div>
                                <label htmlFor="message"
                                       className="block text-sm font-medium mb-2">Your
                                    Message</label>
                                <textarea id="message" name="message" value={formData.message}
                                          placeholder="Hi, Let's connect..."
                                          onChange={(event) => setFormData({...formData, message: event.target.value})}
                                          required
                                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                                )}>Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
