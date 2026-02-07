// Mock student data
export const mockStudents = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@example.com",
        questionsSolved: 245,
        readinessScore: 85,
        status: "Good",
        easy: 120,
        medium: 95,
        hard: 30,
    },
    {
        id: 2,
        name: "Priya Patel",
        email: "priya.patel@example.com",
        questionsSolved: 189,
        readinessScore: 72,
        status: "Good",
        easy: 95,
        medium: 70,
        hard: 24,
    },
    {
        id: 3,
        name: "Amit Kumar",
        email: "amit.kumar@example.com",
        questionsSolved: 156,
        readinessScore: 68,
        status: "Needs Improvement",
        easy: 85,
        medium: 55,
        hard: 16,
    },
    {
        id: 4,
        name: "Sneha Reddy",
        email: "sneha.reddy@example.com",
        questionsSolved: 298,
        readinessScore: 92,
        status: "Good",
        easy: 140,
        medium: 115,
        hard: 43,
    },
    {
        id: 5,
        name: "Vikram Singh",
        email: "vikram.singh@example.com",
        questionsSolved: 134,
        readinessScore: 58,
        status: "Needs Improvement",
        easy: 75,
        medium: 45,
        hard: 14,
    },
    {
        id: 6,
        name: "Ananya Iyer",
        email: "ananya.iyer@example.com",
        questionsSolved: 212,
        readinessScore: 78,
        status: "Good",
        easy: 105,
        medium: 82,
        hard: 25,
    },
    {
        id: 7,
        name: "Rohan Gupta",
        email: "rohan.gupta@example.com",
        questionsSolved: 167,
        readinessScore: 65,
        status: "Needs Improvement",
        easy: 88,
        medium: 60,
        hard: 19,
    },
    {
        id: 8,
        name: "Kavya Nair",
        email: "kavya.nair@example.com",
        questionsSolved: 223,
        readinessScore: 81,
        status: "Good",
        easy: 110,
        medium: 88,
        hard: 25,
    },
];

// Mock assignments/tasks
export const mockAssignments = [
    {
        id: 1,
        title: "Binary Search Implementation",
        description: "Implement binary search algorithm with edge cases",
        difficulty: "Medium",
        dueDate: "2026-02-15",
        status: "Pending",
    },
    {
        id: 2,
        title: "Dynamic Programming - Knapsack",
        description: "Solve 0/1 Knapsack problem using DP",
        difficulty: "Hard",
        dueDate: "2026-02-20",
        status: "Pending",
    },
    {
        id: 3,
        title: "Linked List Reversal",
        description: "Reverse a singly linked list iteratively and recursively",
        difficulty: "Easy",
        dueDate: "2026-02-10",
        status: "Completed",
    },
    {
        id: 4,
        title: "Graph Traversal - BFS & DFS",
        description: "Implement breadth-first and depth-first search",
        difficulty: "Medium",
        dueDate: "2026-02-18",
        status: "Pending",
    },
];

// Mock DSA practice stats for current student
export const mockDSAStats = {
    totalSolved: 245,
    easy: 120,
    medium: 95,
    hard: 30,
    platforms: {
        leetcode: 180,
        codeforces: 45,
        hackerrank: 20,
    },
    recentActivity: [
        {
            id: 1,
            problem: "Two Sum",
            difficulty: "Easy",
            platform: "LeetCode",
            solvedAt: "2026-02-06",
        },
        {
            id: 2,
            problem: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            platform: "LeetCode",
            solvedAt: "2026-02-05",
        },
        {
            id: 3,
            problem: "Merge K Sorted Lists",
            difficulty: "Hard",
            platform: "LeetCode",
            solvedAt: "2026-02-04",
        },
    ],
};

// Mock role recommendations
export const mockRoleRecommendations = [
    {
        role: "Software Development Engineer",
        match: 85,
        reason: "Strong DSA foundation and problem-solving skills",
    },
    {
        role: "Backend Developer",
        match: 78,
        reason: "Good understanding of algorithms and data structures",
    },
    {
        role: "Full Stack Developer",
        match: 72,
        reason: "Well-rounded technical skills",
    },
];

// Current logged-in student data
export const currentStudent = {
    id: 1,
    name: "Rahul Sharma",
    email: "student@placement360.com",
    readinessScore: 85,
    ...mockDSAStats,
};

// Faculty stats
export const facultyStats = {
    totalStudents: mockStudents.length,
    averageReadinessScore: Math.round(
        mockStudents.reduce((sum, s) => sum + s.readinessScore, 0) / mockStudents.length
    ),
    averageDSACompletion: Math.round(
        mockStudents.reduce((sum, s) => sum + s.questionsSolved, 0) / mockStudents.length
    ),
};
