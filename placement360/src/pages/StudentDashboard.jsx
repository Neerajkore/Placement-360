import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
    LayoutDashboard,
    Code,
    FileText,
    FileCheck,
    LogOut,
    Target,
    TrendingUp,
    Calendar,
    Award,
} from "lucide-react";
import { currentStudent, mockAssignments, mockRoleRecommendations } from "@/data/mockData";

export default function StudentDashboard() {
    const [activeNav, setActiveNav] = useState("dashboard");
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "practice", label: "Practice", icon: Code },
        { id: "assignments", label: "Assignments", icon: FileText },
        { id: "resume", label: "Resume Analysis", icon: FileCheck },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r hidden md:block">
                <div className="p-6">
                    <div className="flex items-center space-x-2 mb-8">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold">Placement360</span>
                    </div>

                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveNav(item.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeNav === item.id
                                        ? "bg-primary text-white"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8">
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={handleLogout}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome back, {currentStudent.name}!
                        </h1>
                        <p className="text-gray-600">Here's your placement readiness overview</p>
                    </div>

                    {/* Placement Readiness Score */}
                    <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Award className="w-6 h-6 mr-2" />
                                Placement Readiness Score
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-end space-x-4">
                                <div className="text-6xl font-bold">{currentStudent.readinessScore}%</div>
                                <div className="pb-2">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                            </div>
                            <Progress value={currentStudent.readinessScore} className="mt-4 bg-white/20" />
                            <p className="mt-4 text-blue-100">
                                You're in the top 15% of students. Keep up the great work!
                            </p>
                        </CardContent>
                    </Card>

                    {/* DSA Practice Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Total Questions Solved</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold text-primary mb-4">
                                    {currentStudent.totalSolved}
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Easy</span>
                                        <Badge variant="success">{currentStudent.easy}</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Medium</span>
                                        <Badge variant="warning">{currentStudent.medium}</Badge>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Hard</span>
                                        <Badge variant="destructive">{currentStudent.hard}</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Platform Stats</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">LeetCode</span>
                                            <span className="text-sm text-gray-600">
                                                {currentStudent.platforms.leetcode}
                                            </span>
                                        </div>
                                        <Progress
                                            value={(currentStudent.platforms.leetcode / currentStudent.totalSolved) * 100}
                                        />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">Codeforces</span>
                                            <span className="text-sm text-gray-600">
                                                {currentStudent.platforms.codeforces}
                                            </span>
                                        </div>
                                        <Progress
                                            value={
                                                (currentStudent.platforms.codeforces / currentStudent.totalSolved) * 100
                                            }
                                        />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">HackerRank</span>
                                            <span className="text-sm text-gray-600">
                                                {currentStudent.platforms.hackerrank}
                                            </span>
                                        </div>
                                        <Progress
                                            value={
                                                (currentStudent.platforms.hackerrank / currentStudent.totalSolved) * 100
                                            }
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Recent Activity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {currentStudent.recentActivity.map((activity) => (
                                        <div key={activity.id} className="border-l-2 border-primary pl-3">
                                            <p className="font-medium text-sm">{activity.problem}</p>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <Badge
                                                    variant={
                                                        activity.difficulty === "Easy"
                                                            ? "success"
                                                            : activity.difficulty === "Medium"
                                                                ? "warning"
                                                                : "destructive"
                                                    }
                                                    className="text-xs"
                                                >
                                                    {activity.difficulty}
                                                </Badge>
                                                <span className="text-xs text-gray-500">{activity.solvedAt}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Assigned Tasks */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FileText className="w-5 h-5 mr-2" />
                                Assigned Tasks
                            </CardTitle>
                            <CardDescription>Complete these assignments before the deadline</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {mockAssignments.map((assignment) => (
                                    <div
                                        key={assignment.id}
                                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                                            <p className="text-sm text-gray-600 mt-1">{assignment.description}</p>
                                            <div className="flex items-center space-x-3 mt-2">
                                                <Badge
                                                    variant={
                                                        assignment.difficulty === "Easy"
                                                            ? "success"
                                                            : assignment.difficulty === "Medium"
                                                                ? "warning"
                                                                : "destructive"
                                                    }
                                                >
                                                    {assignment.difficulty}
                                                </Badge>
                                                <span className="text-xs text-gray-500 flex items-center">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    Due: {assignment.dueDate}
                                                </span>
                                            </div>
                                        </div>
                                        <Badge
                                            variant={assignment.status === "Completed" ? "success" : "secondary"}
                                            className="ml-4"
                                        >
                                            {assignment.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Role Recommendations */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Target className="w-5 h-5 mr-2" />
                                Role Recommendations
                            </CardTitle>
                            <CardDescription>Based on your skills and performance</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {mockRoleRecommendations.map((rec, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900">{rec.role}</h4>
                                            <p className="text-sm text-gray-600 mt-1">{rec.reason}</p>
                                        </div>
                                        <div className="ml-4 text-right">
                                            <div className="text-2xl font-bold text-primary">{rec.match}%</div>
                                            <p className="text-xs text-gray-500">Match</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
