import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Target, AlertCircle } from "lucide-react";

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState("student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        const result = login(email, password);

        if (result.success) {
            if (result.role === "student") {
                navigate("/student/dashboard");
            } else if (result.role === "faculty") {
                navigate("/faculty/dashboard");
            }
        } else {
            setError(result.error);
        }
    };

    const fillDemoCredentials = (role) => {
        if (role === "student") {
            setEmail("student@placement360.com");
            setPassword("student123");
        } else {
            setEmail("faculty@placement360.com");
            setPassword("faculty123");
        }
        setError("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center justify-center space-x-2 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">Placement360</span>
                </div>

                <Card className="shadow-xl">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
                        <CardDescription className="text-center">
                            Sign in to access your dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger
                                    value="student"
                                    active={activeTab === "student"}
                                    onClick={() => {
                                        setActiveTab("student");
                                        setError("");
                                    }}
                                >
                                    Student
                                </TabsTrigger>
                                <TabsTrigger
                                    value="faculty"
                                    active={activeTab === "faculty"}
                                    onClick={() => {
                                        setActiveTab("faculty");
                                        setError("");
                                    }}
                                >
                                    Faculty
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value={activeTab}>
                                <form onSubmit={handleLogin} className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    {error && (
                                        <div className="flex items-center space-x-2 text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                                            <AlertCircle className="w-4 h-4" />
                                            <span>{error}</span>
                                        </div>
                                    )}

                                    <Button type="submit" className="w-full" size="lg">
                                        Sign In
                                    </Button>

                                    <div className="text-center">
                                        <button
                                            type="button"
                                            onClick={() => fillDemoCredentials(activeTab)}
                                            className="text-sm text-primary hover:underline"
                                        >
                                            Use demo credentials
                                        </button>
                                    </div>
                                </form>

                                {/* Demo Credentials Info */}
                                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <p className="text-xs font-semibold text-blue-900 mb-2">Demo Credentials:</p>
                                    {activeTab === "student" ? (
                                        <div className="text-xs text-blue-700 space-y-1">
                                            <p>Email: student@placement360.com</p>
                                            <p>Password: student123</p>
                                        </div>
                                    ) : (
                                        <div className="text-xs text-blue-700 space-y-1">
                                            <p>Email: faculty@placement360.com</p>
                                            <p>Password: faculty123</p>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <div className="text-center mt-6">
                    <button
                        onClick={() => navigate("/")}
                        className="text-sm text-gray-600 hover:text-gray-900"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
