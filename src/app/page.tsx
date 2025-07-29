"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Users, Trophy, ArrowRight, Code, Lightbulb, Target, Award } from 'lucide-react';

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
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                            <Lightbulb className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-2xl font-bold">IDEATHON</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
                        <a href="#timeline" className="hover:text-yellow-400 transition-colors">Timeline</a>
                        <a href="#prizes" className="hover:text-yellow-400 transition-colors">Prizes</a>
                        <a href="#register" className="hover:text-yellow-400 transition-colors">Register</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/5"></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                    <div className="mb-8 inline-flex items-center bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-2">
                        <span className="text-yellow-400 font-semibold">National Level Competition</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
                            IDEATHON
                        </span>
                    </h1>

                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
                            DECODED: THE STARTUP EQUATION
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Unleash your entrepreneurial vision. Solve real-world problems. Build the future.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 flex items-center space-x-2 shadow-2xl hover:shadow-yellow-400/25">
                            <span>Register on Unstop</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="text-gray-400 text-lg">
                            <Calendar className="w-5 h-5 inline mr-2" />
                            Registration Deadline: TBD
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

            {/* Timeline Section */}
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

            {/* Prizes Section */}
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

            {/* CTA Section */}
            <section id="register" className="py-20 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                        Ready to Decode Success?
                    </h3>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Join hundreds of innovators in the ultimate startup challenge. Your idea could be the next big breakthrough.
                    </p>
                    <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-6 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 flex items-center space-x-3 mx-auto">
                        <span>Register Now on Unstop</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </section>

            {/* Footer */}
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
        </div>
    );
};

export default IdeathonLanding;
