"use client";

import { useState } from "react";
import { Moon } from "lucide-react";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Page() {
  const [darkMode, setDarkMode] = useState(true); // Start in dark mode

  const dummyData = {
    attendance: "92%",
    totalAssignments: 3,
    gpa: "9.09",
    recentAssignments: [
      {
        title: "BDA Assignment",
        dueDate: "2025-07-30",
        status: "Submitted",
      },
      {
        title: "Blockchain Practical No. 1",
        dueDate: "2025-08-02",
        status: "Pending",
      },
      {
        title: "Major Project Report",
        dueDate: "2025-08-05",
        status: "In Review",
      },
    ],
    courseGrades: [
      {
        course: "Big Data Analytics",
        faculty: "Ajay Mehta",
        grade: "A",
        credits: 4,
      },
      {
        course: "Blockchain Technology",
        faculty: "John",
        grade: "B+",
        credits: 3,
      },
      {
        course: "Artificial Intelligence",
        faculty: "Harry",
        grade: "A+",
        credits: 4,
      },
      {
        course: "Machine Learning",
        faculty: "Tony ",
        grade: "A",
        credits: 4,
      },
      {
        course: "Software Engineering",
        faculty: "Kavita Patil",
        grade: "B",
        credits: 3,
      },
    ],
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 w-full justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Student</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <Moon
                className="w-5 h-5 cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-zinc-900 text-white border border-zinc-800">
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Attendance</h2>
                  <p className="text-3xl font-bold text-blue-400">
                    {dummyData.attendance}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 text-white border border-zinc-800">
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Assignments</h2>
                  <p className="text-3xl font-bold text-green-400">
                    {dummyData.totalAssignments}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 text-white border border-zinc-800">
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold mb-2">GPA</h2>
                  <p className="text-3xl font-bold text-purple-400">
                    {dummyData.gpa}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-zinc-900 text-white border border-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Assignments</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Title</TableHead>
                    <TableHead className="text-white">Due Date</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyData.recentAssignments.map((assignment, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{assignment.title}</TableCell>
                      <TableCell>{assignment.dueDate}</TableCell>
                      <TableCell>{assignment.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="bg-zinc-900 text-white border border-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Course Grades</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Faculty</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Credits</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dummyData.courseGrades.map((course, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{course.course}</TableCell>
                      <TableCell>{course.faculty}</TableCell>
                      <TableCell>{course.grade}</TableCell>
                      <TableCell>{course.credits}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
