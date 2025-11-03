import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaImages,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SiLaravel, SiMysql, SiReact, SiTailwindcss } from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

const LazyImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
          <span className="text-red-500 text-sm">Failed to load</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        onClick={onClick}
        className={`${className} ${
          isLoaded && !error ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "IChat - RealTime Chat App ",
    description:
      "RealTime Chat built with Laravel and React fast and fun , its under development now",
    thumbnail: "/images/IChatImages/1.png",
    github: "https://github.com/CoderM0/real_time_chat",
    liveDemo: "",
    technologies: ["Laravel", "React", "WebSocket", "MySql", "Tailwind CSS"],
    techIcons: [SiLaravel, SiReact, TbBrandSocketIo, SiMysql, SiTailwindcss],
    features: [
      "Real Time Chat",
      "Online status tracker",
      "Read Receipts",
      "Responseve Design",
    ],
    gallerySections: [
      {
        sectionName: "App",
        images: [
          {
            url: "/images/IChatImages/1.png",
            caption: "Landing Page",
          },
          {
            url: "/images/IChatImages/2.png",
            caption: "Registeration",
          },
          {
            url: "/images/IChatImages/3.png",
            caption: "LogIn",
          },
          {
            url: "/images/IChatImages/4.png",
            caption: "Chats List",
          },
          {
            url: "/images/IChatImages/5.png",
            caption: "Chat between Two Contacts - both online",
          },
          {
            url: "/images/IChatImages/6.png",
            caption: "Chat between Two Contacts - the other is offline",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Medical Care System",
    description:
      "Comprehensive healthcare management system with seven distinct user roles including medical professionals, patients, and administrative staff. Built with modern full-stack technologies for optimal performance.",
    thumbnail: "/images/med-care-project/admin/1.png",
    github: "https://github.com/CoderM0/medical_care_v3",
    liveDemo: "",
    technologies: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    techIcons: [SiLaravel, SiReact, SiMysql, SiTailwindcss],
    features: [
      "7-Role System",
      "Patient Records",
      "Appointment Scheduling",
      "Pharmacy Management",
    ],
    gallerySections: [
      {
        sectionName: "Admin Dashboard",
        images: [
          {
            url: "/images/med-care-project/admin/1.png",
            caption: "Dashboard",
          },
          {
            url: "/images/med-care-project/admin/2.png",
            caption: "Add Employee Interface",
          },
          {
            url: "/images/med-care-project/admin/3.png",
            caption: "Employees Management",
          },
          {
            url: "/images/med-care-project/admin/4.png",
            caption: "View Employee Profile",
          },
          {
            url: "/images/med-care-project/admin/5.png",
            caption: "Edit Employee Info",
          },
          {
            url: "/images/med-care-project/admin/6.png",
            caption: "Department & Specialties Management",
          },
          {
            url: "/images/med-care-project/admin/7.png",
            caption: "Patients Records",
          },
          {
            url: "/images/med-care-project/admin/8.png",
            caption: "Inventory Records",
          },
          {
            url: "/images/med-care-project/admin/9.png",
            caption: "Financial Records",
          },
          {
            url: "/images/med-care-project/admin/10.png",
            caption: "Salary Records",
          },
          {
            url: "/images/med-care-project/admin/11.png",
            caption: "View Complaints",
          },
          {
            url: "/images/med-care-project/admin/12.png",
            caption: "Account Management",
          },
          {
            url: "/images/med-care-project/admin/13.png",
            caption: "Delete Account ",
          },
        ],
      },
      {
        sectionName: "Doctor Interface",
        images: [
          {
            url: "/images/med-care-project/doctor/1.png",
            caption: "Sign Up",
          },
          {
            url: "/images/med-care-project/doctor/2.png",
            caption: "Doctor Workspace - Patient Appointments",
          },
          {
            url: "/images/med-care-project/doctor/3.png",
            caption: "View Patient Med Record",
          },
          {
            url: "/images/med-care-project/doctor/4.png",
            caption: "Add Med Decription To a Patient",
          },
          {
            url: "/images/med-care-project/doctor/5.png",
            caption: "Add Lab Test",
          },
          {
            url: "/images/med-care-project/doctor/6.png",
            caption: "Add Task To An Employee",
          },
          {
            url: "/images/med-care-project/doctor/7.png",
            caption: "View & Update Work Schedule",
          },
          {
            url: "/images/med-care-project/doctor/8.png",
            caption: "View Ended Appointments",
          },
          {
            url: "/images/med-care-project/doctor/9.png",
            caption: "View Personal Profile",
          },
          {
            url: "/images/med-care-project/doctor/10.png",
            caption: "Edit Personal Profile",
          },
        ],
      },
      {
        sectionName: "Patient Portal",
        images: [
          {
            url: "/images/med-care-project/patient/1.png",
            caption: "Hospital Departments",
          },
          {
            url: "/images/med-care-project/patient/2.png",
            caption: "Appointments Viewing",
          },
          {
            url: "/images/med-care-project/patient/3.png",
            caption: "Medical History",
          },
          {
            url: "/images/med-care-project/patient/4.png",
            caption: " Add Outer Med Desc & Lab Tests",
          },
          {
            url: "/images/med-care-project/patient/5.png",
            caption: "view Outer Med Desc",
          },
          {
            url: "/images/med-care-project/patient/6.png",
            caption: "Add Complaint",
          },
          {
            url: "/images/med-care-project/patient/7.png",
            caption: "View Department Info & Docs",
          },
          {
            url: "/images/med-care-project/patient/8.png",
            caption: "Book An Appointment",
          },
          {
            url: "/images/med-care-project/patient/9.png",
            caption: "View Doc Profile",
          },
          {
            url: "/images/med-care-project/patient/10.png",
            caption: "View Profile",
          },
          {
            url: "/images/med-care-project/patient/11.png",
            caption: "Edit Profile",
          },
          {
            url: "/images/med-care-project/patient/12.png",
            caption: "Edit Account",
          },
          {
            url: "/images/med-care-project/patient/13.png",
            caption: "Register on Platform ",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Fast Learn - Courses Platform",
    description:
      "A comprehensive e-learning platform with multi-authentication system supporting three distinct roles: instructors who publish courses, students who enroll and complete assessments, and administrators who manage content and user permissions.",
    thumbnail: "/images/fast-learn/student/1.png",
    github: "https://github.com/CoderM0/fast-learn",
    liveDemo: "",
    technologies: ["Laravel", "React", "MySql", "Tailwind CSS"],
    techIcons: [SiLaravel, SiReact, SiMysql, SiTailwindcss],
    features: [
      "Multi-role Authentication",
      "Course Management",
      "Assessment System",
      "Admin Dashboard",
    ],
    gallerySections: [
      {
        sectionName: "Teacher Panel",
        images: [
          {
            url: "/images/fast-learn/teacher/1.png",
            caption: "Log In Page - Public",
          },
          {
            url: "/images/fast-learn/teacher/2.png",
            caption: "Dashboard",
          },
          {
            url: "/images/fast-learn/teacher/3.png",
            caption: "My Courses",
          },
          {
            url: "/images/fast-learn/teacher/4.png",
            caption: "Create New Course",
          },
          {
            url: "/images/fast-learn/teacher/5.png",
            caption: "Edit Course",
          },
          {
            url: "/images/fast-learn/teacher/6.png",
            caption: "Edit & Add Modules & Lessons",
          },
          {
            url: "/images/fast-learn/teacher/7.png",
            caption: "Edit Personal Info",
          },
          {
            url: "/images/fast-learn/teacher/8.png",
            caption: "View Profile",
          },
          {
            url: "/images/fast-learn/teacher/9.png",
            caption: "View My Students",
          },
        ],
      },
      {
        sectionName: "Student Portal",
        images: [
          {
            url: "/images/fast-learn/student/1.png",
            caption: "Registeration on platform",
          },
          {
            url: "/images/fast-learn/student/2.png",
            caption: "My Enrolled Courses ",
          },
          {
            url: "/images/fast-learn/student/3.png",
            caption: "Browse All Courses",
          },
          {
            url: "/images/fast-learn/student/4.png",
            caption: "Course Info",
          },
          {
            url: "/images/fast-learn/student/5.png",
            caption: "Quize Submission",
          },
          {
            url: "/images/fast-learn/student/6.png",
            caption: "Voice Lessons",
          },
          {
            url: "/images/fast-learn/student/7.png",
            caption: "Video Lessons",
          },
          {
            url: "/images/fast-learn/student/8.png",
            caption: "Edit Profile",
          },
          {
            url: "/images/fast-learn/student/9.png",
            caption: "View Profile",
          },
        ],
      },
    ],
  },
];

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState({
    url: null,
    index: 0,
    gallery: null,
    sectionName: "",
  });
  const [activeFilter, setActiveFilter] = useState("all");

  const getFlatGallery = (gallerySections) => {
    return gallerySections.flatMap((section) =>
      section.images.map((img) => ({
        ...img,
        sectionName: section.sectionName,
      }))
    );
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.technologies.includes(activeFilter);
  });

  const openFullscreenImage = (url, index, gallery, sectionName = "") => {
    setFullscreenImage({
      url,
      index,
      gallery,
      sectionName,
    });
  };

  const nextImage = () => {
    if (fullscreenImage.gallery) {
      const nextIndex =
        (fullscreenImage.index + 1) % fullscreenImage.gallery.length;
      setFullscreenImage({
        ...fullscreenImage,
        url: fullscreenImage.gallery[nextIndex].url,
        index: nextIndex,
        sectionName: fullscreenImage.gallery[nextIndex].sectionName || "",
      });
    }
  };

  const prevImage = () => {
    if (fullscreenImage.gallery) {
      const prevIndex =
        fullscreenImage.index === 0
          ? fullscreenImage.gallery.length - 1
          : fullscreenImage.index - 1;
      setFullscreenImage({
        ...fullscreenImage,
        url: fullscreenImage.gallery[prevIndex].url,
        index: prevIndex,
        sectionName: fullscreenImage.gallery[prevIndex].sectionName || "",
      });
    }
  };

  const closeFullscreen = () => {
    setFullscreenImage({
      url: null,
      index: 0,
      gallery: null,
      sectionName: "",
    });
  };

  const handleKeyDown = (e) => {
    if (!fullscreenImage.url) return;
    if (e.key === "Escape") closeFullscreen();
    else if (e.key === "ArrowRight") nextImage();
    else if (e.key === "ArrowLeft") prevImage();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenImage]);

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mb-4">
                  {project.techIcons.map((Icon, i) => (
                    <div
                      key={i}
                      className="text-2xl text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      <Icon />
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group/code"
                    >
                      <FaGithub className="text-lg group-hover/code:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">Code</span>
                    </a>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300 group/demo"
                      >
                        <FaExternalLinkAlt className="text-sm group-hover/demo:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    onClick={() => setActiveGallery(project)}
                  >
                    <FaImages className="text-sm" />
                    <span className="text-sm font-medium">View Gallery</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {fullscreenImage.url && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {fullscreenImage.gallery && fullscreenImage.gallery.length > 1 && (
              <>
                <button
                  className="absolute left-4 z-10 text-white bg-black/50 hover:bg-black/70 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <FaChevronLeft className="text-xl" />
                </button>
                <button
                  className="absolute right-4 z-10 text-white bg-black/50 hover:bg-black/70 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 backdrop-blur-sm border border-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <FaChevronRight className="text-xl" />
                </button>
              </>
            )}

            <div className="relative max-w-6xl max-h-[85vh] flex items-center justify-center group">
              <LazyImage
                src={fullscreenImage.url}
                alt="Fullscreen"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {fullscreenImage.gallery && (
                <>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 opacity-0 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm border border-white/20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {fullscreenImage.sectionName}
                  </div>
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-xl text-lg max-w-md text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                    {fullscreenImage.gallery[fullscreenImage.index].caption}
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-white/20">
                    {fullscreenImage.index + 1} /{" "}
                    {fullscreenImage.gallery.length}
                  </div>
                </>
              )}
            </div>

            <button
              className="absolute top-4 right-4 z-10 text-white bg-red-500 hover:bg-red-600 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg border-2 border-white/20 hover:border-white/40"
              onClick={closeFullscreen}
            >
              <IoClose className="text-xl font-bold" />
            </button>
          </div>
        </div>
      )}

      {activeGallery && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center backdrop-blur-sm z-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {activeGallery.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {activeGallery.description}
                </p>
              </div>
              <button
                className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setActiveGallery(null)}
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            <div className="p-6 max-h-[calc(95vh-120px)] overflow-y-auto gallery-scrollbar">
              <div className="space-y-12">
                {activeGallery.gallerySections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-6">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                        <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                        {section.sectionName}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group/gallery"
                          onClick={() =>
                            openFullscreenImage(
                              img.url,
                              imgIndex,
                              getFlatGallery(activeGallery.gallerySections),
                              section.sectionName
                            )
                          }
                        >
                          <div className="relative overflow-hidden">
                            <LazyImage
                              src={img.url}
                              alt={`${section.sectionName} - ${img.caption}`}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover/gallery:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white px-4 py-2 rounded-lg font-medium transform scale-90 group-hover/gallery:scale-100 transition-transform duration-300">
                                View Fullscreen
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                              {img.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
