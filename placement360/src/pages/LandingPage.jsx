import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Target, Users, Shield, Smartphone, Zap } from "lucide-react";

export default function LandingPage() {
    const navigate = useNavigate();

    const features = [
        {
            icon: Target,
            title: "Placement Readiness Dashboard",
            description: "Track your progress with comprehensive analytics and personalized insights.",
        },
        {
            icon: BarChart3,
            title: "DSA Progress Tracking",
            description: "Monitor your problem-solving journey across multiple platforms like LeetCode and Codeforces.",
        },
        {
            icon: Users,
            title: "Faculty Analytics",
            description: "Empower educators with detailed student performance metrics and assignment management.",
        },
        {
            icon: Shield,
            title: "Secure Assessments",
            description: "Conduct fair and secure coding assessments with anti-cheating measures.",
        },
    ];

    const pwaFeatures = [
        { icon: Smartphone, text: "Mobile-First Design" },
        { icon: Zap, text: "Lightning Fast Performance" },
        { icon: Shield, text: "Offline Capabilities" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">Placement360</span>
                    </div>
                    <Button onClick={() => navigate("/login")} variant="outline">
                        Login
                    </Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Placement360 – Your Complete{" "}
                        <span className="text-primary">Placement Readiness</span> Platform
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Track DSA practice, manage assignments, and gain AI-powered insights to ace your
                        placement preparation. Built for students and faculty.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            onClick={() => navigate("/login")}
                            className="text-lg px-8 py-6"
                        >
                            Login as Student
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => navigate("/login")}
                            className="text-lg px-8 py-6"
                        >
                            Login as Faculty
                        </Button>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Key Features
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm">{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* PWA Capabilities Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                        Progressive Web App
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {pwaFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                    <feature.icon className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-lg font-medium text-gray-700">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">Placement360</span>
                            </div>
                            <p className="text-gray-400">
                                Empowering students and faculty with data-driven placement preparation.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Email Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2026 Placement360. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
