"use client";
import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import { ChevronDown, Calendar, Users, Trophy, ArrowRight, Code, Lightbulb, Target, Award, Mail, Phone, MessageSquare, Contact, Download } from 'lucide-react';

const IdeathonLanding = () => {

    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeInUp = {
        opacity: scrollY > 100 ? 1 : 0,
        transform: `translateY(${scrollY > 100 ? 0 : 30}px)`,
        transition: 'all 0.8s ease-out'
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
            {/* Header */}
            <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-yellow-400/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div>
                        <img src="/ideathon-logoo.png" alt="IDEATHON Logo" className="w-auto h-12" />
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
                        <a href="#timeline" className="hover:text-yellow-400 transition-colors">Timeline</a>
                        <a href="#problems" className="hover:text-yellow-400 transition-colors">Problems</a>
                        <a href="#prizes" className="hover:text-yellow-400 transition-colors">Prizes</a>
                        <a href="#register" className="hover:text-yellow-400 transition-colors">Register</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-4 relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5"></div>

                <AnimatedBackground />

                <style jsx>{`
                    @keyframes floatStar {
                        0% {
                            transform: translateY(100vh) translateX(-50px) scale(0);
                            opacity: 0;
                        }
                        10% {
                            opacity: 0.6;
                            transform: translateY(90vh) translateX(-40px) scale(1);
                        }
                        90% {
                            opacity: 0.6;
                            transform: translateY(10vh) translateX(40px) scale(1);
                        }
                        100% {
                            transform: translateY(-100px) translateX(50px) scale(0);
                            opacity: 0;
                        }
                    }
                    `}</style>


                <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                    <div className="mb-8 inline-flex items-center bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-2">
                        <span className="text-yellow-400 font-semibold">National Level Competition</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight">

                        <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                            IDEATHON
                        </span>
                    </h1>

                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
                            Spark Before the Code
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Unleash your entrepreneurial vision. Solve real-world problems. Build the future.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 flex items-center space-x-2 shadow-2xl hover:shadow-yellow-400/25">
                            <span> <a href="https://unstop.com/hackathons/ideathon-decoded-the-start-up-equation-padmabhushan-vasantdada-patil-pratishthans-college-of-engineering-pvpp-1530195" target="_blank" rel="noopener noreferrer"> Register on Unstop </a> </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="text-gray-400 text-lg">
                            <Calendar className="w-5 h-5 inline mr-2" />
                            Registration Deadline: 15 August 2025
                        </div>
                    </div>

                    <div className="animate-bounce">
                        <ChevronDown className="w-8 h-8 mx-auto text-yellow-400" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div style={fadeInUp}>
                            <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                                Decode The Future
                            </h3>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                IDEATHON is a national-level innovation challenge where brilliant minds converge to solve tomorrow&apos;s problems today. Connected to the prestigious Quasar hackathon ecosystem, this event pushes the boundaries of entrepreneurial thinking.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                                        <Target className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Innovation Focus</h4>
                                        <p className="text-gray-400">Real-world problem solving with scalable solutions</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">National Network</h4>
                                        <p className="text-gray-400">Connect with top innovators across the country</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                                        <Code className="w-6 h-6 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Tech Excellence</h4>
                                        <p className="text-gray-400">Cutting-edge technology meets business acumen</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-3xl flex items-center justify-center border border-yellow-400/30">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
                                        <Lightbulb className="w-16 h-16 text-black" />
                                    </div>
                                    <h4 className="text-2xl font-bold">Innovation</h4>
                                    <p className="text-gray-400">At the core of everything</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section 
            <section id="timeline" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Event Timeline
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { phase: "Registration", desc: "Sign up on Unstop platform", icon: Users },
                            { phase: "Idea Submission", desc: "Submit your startup concept", icon: Lightbulb },
                            { phase: "Evaluation", desc: "Expert panel review", icon: Target },
                            { phase: "Final Pitch", desc: "Present to industry leaders", icon: Trophy }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl group-hover:shadow-yellow-400/50">
                                    <item.icon className="w-10 h-10 text-black" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.phase}</h4>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            */}

            <section id="timeline" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Event Timeline
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {[
                                { date: "2 August 2025", event: "Registration Opens", desc: "Sign up begins on Unstop platform", icon: Users },
                                { date: "15 August 2025", event: "Registration Closes", desc: "Last day to register for the competition", icon: Users },
                                { date: "08 - 22 August 2025", event: "PPT Submission Window", desc: "Submit your startup presentation", icon: Lightbulb },
                                { date: "23 & 24 August 2025", event: "Online Team Shortlisting", desc: "Google Meet evaluation rounds", icon: Target },
                                { date: "26 & 27 August 2025", event: "Shortlisted Teams Announcement", desc: "Results of online evaluation", icon: Trophy },
                                { date: "02 & 03 September 2025", event: "Invitations Sent", desc: "Selected teams receive event invitations", icon: Award },
                                { date: "13 September 2025", event: "Final Offline Ideathon", desc: "Grand finale at our campus", icon: Trophy }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-gradient-to-r from-yellow-400/5 to-transparent rounded-xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
                                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl group-hover:shadow-yellow-400/50">
                                        <item.icon className="w-10 h-10 text-black" />
                                    </div>
                                    <div className="md:w-48 flex-shrink-0">
                                        <div className="text-yellow-400 font-bold text-lg">{item.date}</div>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-bold mb-2">{item.event}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statements Section */}
            <section id="problems" className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Problem Statements
                    </h3>
                    <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto text-lg">
                        Choose from 10 healthcare innovation challenges designed to solve real-world problems and create meaningful impact.
                    </p>
                    <div className="text-center mt-2">
                        <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
                            <Lightbulb className="w-5 h-5 text-yellow-400 mr-2" />
                            <span className="text-yellow-400 font-semibold">All problem statements focus on Healthcare Innovation</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                id: "PS1",
                                title: "Smart Queuing & Bed Availability Management",
                                problem: "Long patient wait times and delayed admissions due to inefficient queuing systems and lack of real-time bed availability data.",
                                solution: "Develop an intelligent queuing system that manages patient flow, displays real-time bed availability, and streamlines admissions across hospitals."
                            },
                            {
                                id: "PS2",
                                title: "Real-Time Medicine & Consumable Quality Monitoring",
                                problem: "Expired, counterfeit, or substandard medicines compromise patient safety with no reliable real-time monitoring system.",
                                solution: "Create an AI-powered system using barcode/RFID scanning to detect and flag unsafe medicines before reaching patients."
                            },
                            {
                                id: "PS3",
                                title: "Health Data Information & Management System (HDIMS)",
                                problem: "Patient health data is fragmented across multiple providers, making complete medical histories inaccessible to doctors.",
                                solution: "Build a secure mobile app that consolidates patient records, histories, and test results with controlled access for healthcare providers."
                            },
                            {
                                id: "PS4",
                                title: "Rural Health Follow-Up & AI Symptom Guidance Platform",
                                problem: "Rural patients fail to complete treatments due to poor follow-up, lack of reminders, and limited access to qualified doctors.",
                                solution: "Develop a lightweight, multilingual platform via web/SMS/WhatsApp with medication reminders and AI-powered symptom checking."
                            },
                            {
                                id: "PS5",
                                title: "Diagnostics & Imaging AI (Offline/Low-Data)",
                                problem: "Lack of radiologists and pathologists causes delays in interpreting medical scans and test reports in many regions.",
                                solution: "Develop AI-assisted image analysis tools for X-rays, CT scans, and blood reports that operate offline on local devices."
                            },
                            {
                                id: "PS6",
                                title: "Portable Digital Blood Bank & Donor Locator",
                                problem: "Families struggle to find matching blood donors during emergencies, leading to critical delays and adverse outcomes.",
                                solution: "Create a mobile app connecting verified donors and blood banks using GPS and push notifications for emergency response."
                            },
                            {
                                id: "PS7",
                                title: "AI-Powered Smart Pill & Recovery Tracking Assistant",
                                problem: "Patients miss medication doses or recovery tasks, increasing risk of complications and hospital readmissions.",
                                solution: "Build an AI-driven recovery assistant with personalized reminders, vital sign logging, and automated symptom triage."
                            },
                            {
                                id: "PS8",
                                title: "Public Health Outbreak & Crisis Response Network",
                                problem: "Delays in outbreak detection and fragmented coordination lead to preventable deaths and inefficient resource use.",
                                solution: "Develop a community-driven platform for case reporting, outbreak mapping, AI trend detection, and emergency coordination."
                            },
                            {
                                id: "PS9",
                                title: "Assistive Technology for Elderly and Differently-Abled",
                                problem: "Standard health apps don't accommodate needs of elderly and disabled users with vision, motor, or hearing impairments.",
                                solution: "Develop a voice-first platform with accessibility features like high-contrast text, large buttons, and emergency alerts."
                            },
                            {
                                id: "PS10",
                                title: "AI-Powered Remote Poly-Diagnostic Station",
                                problem: "Lack of specialist diagnostics in rural/remote areas causes dangerous treatment delays and unnecessary referrals.",
                                solution: "Design portable, AI-assisted diagnostic station for multiple on-site tests with instant AI-assisted pre-analysis."
                            }
                        ].map((ps, idx) => (
                            <div key={idx} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-[1.02]">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm">
                                        {ps.id}
                                    </div>
                                    <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                                        <Target className="w-5 h-5 text-yellow-400" />
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                                    {ps.title}
                                </h4>

                                <div className="space-y-4">
                                    <div>
                                        <h5 className="text-red-400 font-semibold mb-2">Problem:</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">{ps.problem}</p>
                                    </div>

                                    <div>
                                        <h5 className="text-green-400 font-semibold mb-2">Solution Approach:</h5>
                                        <p className="text-gray-400 text-sm leading-relaxed">{ps.solution}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2 shadow-lg" 
                                onClick={() => window.open("https://drive.google.com/file/d/1Z9xBvEn0gKrKxy-Z0Q8Jf15jEGNbUg7T/view", "_blank")}>
                                <Download className="w-5 h-5" />
                                <span> Problem Statements PDF </span>
                            </button>
                            <button className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                                onClick={() => window.open("https://docs.google.com/presentation/d/1c6-6-BzLD7SggjC_1X9UTOTeNbZe5Mcz/edit", "_blank")}>
                                <Download className="w-5 h-5" />
                                <span>PPT Submission Template</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Will Be There Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Who Will Be There?
                    </h3>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { count: "300+", label: "Tech Participants" },
                            { count: "100+", label: "Shortlisted Teams" },
                            { count: "1000+", label: "College Audience" },
                            { count: "50+", label: "Tech Experts & Mentors" },
                            { count: "200+", label: "Startup Enthusiasts" }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-yellow-400/30 group-hover:border-yellow-400/60">
                                    <span className="text-2xl font-bold text-yellow-400">{item.count}</span>
                                </div>
                                <p className="text-gray-300 font-medium">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Prizes Section 
            <section id="prizes" className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Prizes & Recognition
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { position: "1st Place", prize: "₹15,000", extra: "Mentorship Program" },
                            { position: "2nd Place", prize: "₹10,000", extra: "Industry Connect" },
                            { position: "3rd Place", prize: "₹5,000", extra: "Certificate of Excellence" }
                        ].map((item, idx) => (
                            <div key={idx} className={`relative p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-300 ${idx === 0 ? 'border-yellow-400 bg-gradient-to-br from-yellow-400/10 to-transparent' : 'border-gray-600 bg-gradient-to-br from-gray-800/50 to-transparent'
                                }`}>
                                <div className="text-center">
                                    <Award className={`w-16 h-16 mx-auto mb-4 ${idx === 0 ? 'text-yellow-400' : 'text-gray-400'}`} />
                                    <h4 className="text-2xl font-bold mb-2">{item.position}</h4>
                                    <div className={`text-4xl font-black mb-4 ${idx === 0 ? 'text-yellow-400' : 'text-white'}`}>
                                        {item.prize}
                                    </div>
                                    <p className="text-gray-400">{item.extra}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            */}

            <section id="prizes" className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Prizes & Recognition
                    </h3>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-3">
                            <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
                            <span className="text-yellow-400 font-bold text-xl">Prize Pool: ₹30,000+</span>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { position: "Winner", prize: "Cash Prize + Quasar Entry", extra: "Mentorship Program" },
                            { position: "Runner Up", prize: "Cash Prize + Quasar Entry", extra: "Industry Connect" },
                            { position: "3rd Place", prize: "Cash Prize + Recognition", extra: "Certificate of Excellence" }
                        ].map((item, idx) => (
                            <div key={idx} className={`relative p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-300 ${idx === 0 ? 'border-yellow-400 bg-gradient-to-br from-yellow-400/10 to-transparent' : 'border-gray-600 bg-gradient-to-br from-gray-800/50 to-transparent'
                                }`}>
                                <div className="text-center">
                                    <Award className={`w-16 h-16 mx-auto mb-4 ${idx === 0 ? 'text-yellow-400' : 'text-gray-400'}`} />
                                    <h4 className="text-2xl font-bold mb-2">{item.position}</h4>
                                    <div className={`text-lg font-bold mb-4 ${idx === 0 ? 'text-yellow-400' : 'text-white'}`}>
                                        {item.prize}
                                    </div>
                                    <p className="text-gray-400">{item.extra}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-full px-8 py-4 border border-gray-600">
                            <Award className="w-6 h-6 text-yellow-400 mr-3" />
                            <span className="text-white font-bold">Certificates for All Participants</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="register" className="py-20 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Ready to Decode Success?
                    </h3>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Join hundreds of innovators in the ultimate startup challenge. Your idea could be the next big breakthrough.
                    </p>
                    <a href="https://unstop.com/hackathons/ideathon-decoded-the-start-up-equation-padmabhushan-vasantdada-patil-pratishthans-college-of-engineering-pvpp-1530195" target="_blank" rel="noopener noreferrer">
                        <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-6 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 flex items-center space-x-3 mx-auto">
                            <span>  Register Now on Unstop </span>
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </a>
                </div>
            </section>

            {/* Footer 
            <footer className="py-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                            <Lightbulb className="w-8 h-8 text-black" />
                        </div>
                        <span className="text-3xl font-bold">IDEATHON</span>
                    </div>
                    <p className="text-gray-400 mb-4">Powered by <a href="https://itsa-pvppcoe.vercel.app" className="text-yellow-400 hover:underline">ITSA</a></p>
                    <p className="text-gray-400 mb-4">
                        Developed by <a href="https://github.com/Dark-Kernel" className="text-yellow-400 hover:underline">Dark-Kernel</a>
                    </p>
                    <p className="text-gray-500 text-sm">© 2025 IDEATHON. All rights reserved.</p>
                </div>
            </footer>
            */}

            <footer className="py-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">

                        <div>
                            <h4 className="text-xl font-bold mb-2 text-yellow-400">Contact Details</h4>
                            <div className="space-y-2 text-gray-400">
                                <p>
                                    <Mail className="w-5 h-5 inline-block mr-2 text-yellow-400" />
                                    <a href="mailto:ideathon.itsa@pvppcoe.ac.in" className="hover:underline">
                                        ideathon.itsa@pvppcoe.ac.in
                                    </a>
                                </p>
                                <p>
                                    <Phone className="w-5 h-5 inline-block mr-2 text-yellow-400" />
                                    <span className="hover:underline">+91 9049594831</span>
                                </p>
                                <p>
                                    <MessageSquare className="w-5 h-5 inline-block mr-2 text-yellow-400" />
                                    <span className="hover:underline">+91 8928871969</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-center">
                            <div className="flex items-center justify-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="w-8 h-8 text-black" />
                                </div>
                                <span className="text-3xl font-bold">IDEATHON</span>
                            </div>

                            <p className="text-gray-400 mb-2">
                                Powered by{" "}
                                <a
                                    href="https://itsa-pvppcoe.vercel.app"
                                    className="text-yellow-400 hover:underline"
                                >
                                    ITSA
                                </a>
                            </p>
                            <p className="text-gray-400 mb-2">
                                Developed by{" "}
                                <a
                                    href="https://github.com/Dark-Kernel"
                                    className="text-yellow-400 hover:underline"
                                >
                                    Dark-Kernel
                                </a>
                            </p>
                            <p className="text-gray-500 text-sm">© 2025 IDEATHON. All rights reserved.</p>
                        </div>

                        <div className="text-center md:text-right">
                            <h4 className="text-xl font-bold mb-4 text-yellow-400">Venue Address</h4>
                            <div className="text-gray-400 leading-relaxed">
                                <p>Vasantdada Patil Educational Complex</p>
                                <p>Eastern Express Highway, Chunabhatti</p>
                                <p>Sion East, Mumbai, Maharashtra</p>
                                <p>MH 400022, India</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>


        </div>
    );
};

export default IdeathonLanding;
