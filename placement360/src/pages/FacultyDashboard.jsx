import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    LayoutDashboard,
    Users,
    FileText,
    LogOut,
    Target,
    TrendingUp,
    UserCheck,
    BookOpen,
} from "lucide-react";
import { mockStudents, facultyStats, mockAssignments } from "@/data/mockData";

export default function FacultyDashboard() {
    const [activeNav, setActiveNav] = useState("dashboard");
    const [assignments, setAssignments] = useState(mockAssignments);
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        difficulty: "Medium",
        dueDate: "",
    });
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.title && newTask.description && newTask.dueDate) {
            const task = {
                id: assignments.length + 1,
                ...newTask,
                status: "Pending",
            };
            setAssignments([...assignments, task]);
            setNewTask({ title: "", description: "", difficulty: "Medium", dueDate: "" });
            alert("Task assigned successfully!");
        }
    };

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
        { id: "analytics", label: "Student Analytics", icon: Users },
        { id: "assign", label: "Assign Tasks", icon: FileText },
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
                        <Button variant="outline" className="w-full" onClick={handleLogout}>
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Faculty Dashboard</h1>
                        <p className="text-gray-600">Monitor student progress and manage assignments</p>
                    </div>

                    {activeNav === "dashboard" && (
                        <>
                            {/* Class Overview Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center">
                                            <Users className="w-5 h-5 mr-2" />
                                            Total Students
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-5xl font-bold">{facultyStats.totalStudents}</div>
                                        <p className="text-blue-100 mt-2">Active learners</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center">
                                            <TrendingUp className="w-5 h-5 mr-2" />
                                            Avg Readiness Score
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-5xl font-bold">{facultyStats.averageReadinessScore}%</div>
                                        <p className="text-green-100 mt-2">Class average</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                                    <CardHeader>
                                        <CardTitle className="text-white flex items-center">
                                            <BookOpen className="w-5 h-5 mr-2" />
                                            Avg DSA Completion
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-5xl font-bold">{facultyStats.averageDSACompletion}</div>
                                        <p className="text-purple-100 mt-2">Questions solved</p>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Student Analytics Table */}
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <UserCheck className="w-5 h-5 mr-2" />
                                        Student Performance Overview
                                    </CardTitle>
                                    <CardDescription>Track individual student progress</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Student Name</TableHead>
                                                <TableHead>Email</TableHead>
                                                <TableHead className="text-center">Questions Solved</TableHead>
                                                <TableHead className="text-center">Readiness Score</TableHead>
                                                <TableHead className="text-center">Status</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {mockStudents.map((student) => (
                                                <TableRow key={student.id}>
                                                    <TableCell className="font-medium">{student.name}</TableCell>
                                                    <TableCell className="text-gray-600">{student.email}</TableCell>
                                                    <TableCell className="text-center">
                                                        <Badge variant="outline">{student.questionsSolved}</Badge>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        <span className="font-semibold text-primary">
                                                            {student.readinessScore}%
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        <Badge
                                                            variant={student.status === "Good" ? "success" : "warning"}
                                                        >
                                                            {student.status}
                                                        </Badge>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </>
                    )}

                    {activeNav === "analytics" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Detailed Student Analytics</CardTitle>
                                <CardDescription>In-depth performance metrics for each student</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Student Name</TableHead>
                                            <TableHead className="text-center">Easy</TableHead>
                                            <TableHead className="text-center">Medium</TableHead>
                                            <TableHead className="text-center">Hard</TableHead>
                                            <TableHead className="text-center">Total</TableHead>
                                            <TableHead className="text-center">Score</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {mockStudents.map((student) => (
                                            <TableRow key={student.id}>
                                                <TableCell className="font-medium">{student.name}</TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="success">{student.easy}</Badge>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="warning">{student.medium}</Badge>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant="destructive">{student.hard}</Badge>
                                                </TableCell>
                                                <TableCell className="text-center font-semibold">
                                                    {student.questionsSolved}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <span className="font-bold text-primary">{student.readinessScore}%</span>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    )}

                    {activeNav === "assign" && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Assign New Task
                                </CardTitle>
                                <CardDescription>Create and assign homework to students</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleAddTask} className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="title" className="text-sm font-medium">
                                            Task Title
                                        </label>
                                        <Input
                                            id="title"
                                            placeholder="e.g., Binary Tree Traversal"
                                            value={newTask.title}
                                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="description" className="text-sm font-medium">
                                            Description
                                        </label>
                                        <Input
                                            id="description"
                                            placeholder="Detailed task description"
                                            value={newTask.description}
                                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="difficulty" className="text-sm font-medium">
                                                Difficulty
                                            </label>
                                            <select
                                                id="difficulty"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                value={newTask.difficulty}
                                                onChange={(e) => setNewTask({ ...newTask, difficulty: e.target.value })}
                                            >
                                                <option value="Easy">Easy</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Hard">Hard</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="dueDate" className="text-sm font-medium">
                                                Due Date
                                            </label>
                                            <Input
                                                id="dueDate"
                                                type="date"
                                                value={newTask.dueDate}
                                                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">
                                        Assign Task
                                    </Button>
                                </form>

                                {/* Current Assignments */}
                                <div className="mt-8">
                                    <h3 className="font-semibold text-lg mb-4">Current Assignments</h3>
                                    <div className="space-y-3">
                                        {assignments.map((assignment) => (
                                            <div
                                                key={assignment.id}
                                                className="flex items-center justify-between p-4 border rounded-lg"
                                            >
                                                <div>
                                                    <h4 className="font-medium">{assignment.title}</h4>
                                                    <p className="text-sm text-gray-600">{assignment.description}</p>
                                                    <div className="flex items-center space-x-2 mt-2">
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
                                                        <span className="text-xs text-gray-500">Due: {assignment.dueDate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </main>
        </div>
    );
}
