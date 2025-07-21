import React, { useState } from "react";
import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CButton,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CForm,
  CFormInput,
  CFormTextarea,
  CFooter,
  CCol,
  CRow,
  CBadge,
  CImage,
} from "@coreui/react";
import { CIcon } from "@coreui/icons-react";
import {
  cibLinkedin,
  cibGithub,
  cibFacebook,
  cibInstagram,
} from "@coreui/icons";
import { cilMenu, cilCheckCircle, cilFolderOpen } from "@coreui/icons";
import {
  cilArrowRight,
  cilEnvelopeOpen,
  cilExternalLink,
  cilPhone,
  cilLocationPin,
  cilX,
} from "@coreui/icons";
import heroImage from "../src/images/heroImg.png";
import StudyNotionImage from "../src/images/StudyNotionImg.png";
import ShoppingCartImage from "../src/images/Shopping-cart-image.png";
import RandomPasswordImage from "../src/images/password-generator.png";
import MyImage from "../src/images/My_Photo.jpg";
import "./App.css";
import { toast } from "react-toastify";
import Toast from "./components/Toast";

const App = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://my-portfolio-jrul.onrender.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (!data.success) {
        toast.error(data.message || "Failed to submit form");
      } else {
        toast.success(data.message || "Message Sent successfully");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Skills data
  const skills = [
    { name: "MongoDB", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "Redux/State Management", level: 80 },
    { name: "RESTful APIs", level: 85 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Bootstrap/Tailwind", level: 85 },
    { name: "Git/Github", level: 80 },
  ];

  // Project Data
  const projects = [
    {
      id: 1,
      title: "Ed-tech Platform",
      description:
        "Full-stack Education technology solution with payment integration and course management system",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "TailwindCSS",
        "Razorpay API",
      ],
      image: StudyNotionImage,
      liveUrl:
        "https://study-notion-opk43aelh-shaiphali-jaiswals-projects.vercel.app",
      githubUrl: "https://github.com/Shaiphali23/StudyNotion",
    },
    {
      id: 2,
      title: "React Shopping Cart",
      description:
        "E-commerce application with cart functionality and user authentication",
      tags: ["React", "Redux", "React Router", "CSS Modules", "Mock API"],
      image: ShoppingCartImage,
      liveUrl: "https://react-shopping-cart-gilt-iota.vercel.app",
      githubUrl: "https://github.com/Shaiphali23/react-shopping-cart",
    },
    {
      id: 3,
      title: "Random Password Generator",
      description: "Secure password generator with customizable options",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: RandomPasswordImage,
      liveUrl: "https://random-password-generator-virid-zeta.vercel.app",
      githubUrl: "https://github.com/Shaiphali23/random-password-generator",
    },
  ];

  // Education data
  const education = [
    {
      institution: "Mahatma Gandhi Kashi Vidyapith University",
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2019 - 2022",
    },
    {
      institution: "Code Help by Love Babbar",
      degree: "Certification of Full Stack Web Development (MERN Stack)",
      year: "2023 - 2024",
    },
  ];

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="bg-light portfolio">
        {/* Navigation Bar */}
        <CHeader
          className="fixed-top bg-white shadow-sm"
          style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <CContainer fluid="xxl">
            <div className="d-flex justify-content-between align-items-center py-2 px-3 px-md-4 w-100">
              {/* Logo/Brand */}
              <CHeaderBrand
                href="#home"
                className="d-flex align-items-center text-decoration-none"
              >
                <span
                  className="text-dark fw-bold fs-3"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Shaiphali
                  <span className="text-primary">.</span>
                </span>
              </CHeaderBrand>

              {/* Desktop Navigation */}
              <CHeaderNav className="d-none d-md-flex align-items-center">
                {navItems.map((item, index) => (
                  <CNavItem key={index}>
                    <CNavLink
                      href={item.href}
                      className="nav-link-hover px-3 py-2 mx-1"
                      style={{
                        color: "#1e293b",
                        fontWeight: "500",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.name}
                    </CNavLink>
                  </CNavItem>
                ))}

                <CNavItem className="ms-3">
                  <CButton
                    color="primary"
                    size="sm"
                    className="rounded-pill px-3 fw-medium shadow-sm"
                    href="#contact"
                  >
                    Hire Me
                  </CButton>
                </CNavItem>
              </CHeaderNav>

              {/* Mobile Menu Button - Toggles between hamburger and close icon */}
              <div className="d-md-none">
                <CButton
                  color="link"
                  className="p-0 border-0"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  style={{
                    width: "40px",
                    height: "40px",
                    position: "relative",
                    zIndex: 1040,
                  }}
                >
                  <CIcon
                    icon={mobileMenuOpen ? cilX : cilMenu}
                    size="xl"
                    className="transition-all"
                    style={{
                      transition: "transform 0.3s ease, opacity 0.3s ease",
                    }}
                  />
                </CButton>
              </div>
            </div>
          </CContainer>

          {/* Mobile Menu */}
          <div
            className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              padding: "1.5rem",
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(-150%)",
              opacity: mobileMenuOpen ? 1 : 0,
              transition:
                "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
              zIndex: 1020,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              pointerEvents: mobileMenuOpen ? "auto" : "none",
            }}
          >
            {navItems.map((item, index) => (
              <CButton
                key={index}
                color="link"
                href={item.href}
                className="text-center p-3 position-relative overflow-hidden menu-item-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </CButton>
            ))}

            <CButton
              color="primary"
              className="mt-3 rounded-pill py-3 fw-semibold shadow-sm hire-me-button"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </CButton>
          </div>
        </CHeader>

        {/* Hero Section */}
        <section
          id="home"
          className="min-vh-100 d-flex align-items-center position-relative overflow-hidden hero-section"
        >
          <CContainer className="py-5 py-lg-5 my-lg-auto">
            <CRow className="align-items-center justify-content-center g-4 g-lg-5">
              {/* Left Column - Content */}
              <CCol
                xs={12}
                sm={10}
                md={8}
                lg={6}
                xl={5}
                className="text-white px-3 px-sm-4 px-lg-0 pe-lg-5 order-2 order-lg-1 text-center text-lg-start"
              >
                <div className="hero-content">
                  <CBadge
                    color="primary"
                    className="px-3 py-2 mb-3 fw-medium rounded-pill d-inline-block"
                    style={{
                      fontSize: "0.875rem",
                      letterSpacing: "0.5px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    Hello, I'm Shaiphali
                  </CBadge>

                  <h1
                    className="fw-bold mb-3 mb-md-4"
                    style={{
                      lineHeight: "1.2",
                      fontSize: "clamp(1rem, 8vw, 2.5rem)",
                      fontWeight: "800",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Building Digital{" "}
                    <span
                      className="text-primary"
                      style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Experiences
                    </span>{" "}
                    That Matter
                  </h1>

                  <p
                    className="lead mb-4 opacity-75"
                    style={{
                      maxWidth: "500px",
                      fontSize: "clamp(1rem, 2vw, 1.25rem)",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    I'm a passionate frontend developer dedicated to creating
                    beautiful, functional, and user-centered digital
                    experiences.
                  </p>

                  <div className="d-flex flex-wrap gap-2 gap-md-3 justify-content-center justify-content-lg-start mt-4">
                    <CButton
                      color="primary"
                      size="lg"
                      className="px-4 px-md-5 py-2 py-md-3 fw-medium rounded-pill shadow-sm"
                      href="#projects"
                    >
                      View My Work
                      <CIcon icon={cilArrowRight} className="ms-2" />
                    </CButton>

                    <CButton
                      variant="outline"
                      color="light"
                      size="lg"
                      className="px-4 px-md-5 py-2 py-md-3 fw-medium rounded-pill"
                      href="#contact"
                    >
                      Contact Me{" "}
                      <CIcon icon={cilEnvelopeOpen} className="ms-2" />
                    </CButton>
                  </div>
                </div>
              </CCol>

              {/* Right Column - Image */}
              <CCol
                xs={12}
                sm={10}
                md={8}
                lg={6}
                xl={5}
                className="order-1 order-lg-2 d-flex justify-content-center position-relative mb-4 mb-md-5 mb-lg-0"
              >
                <div
                  className="position-relative"
                  style={{
                    maxWidth: "100%",
                    width: "clamp(200px, 80vw, 400px)",
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-circle opacity-10"
                    style={{
                      transform: "translate(5%, 5%) scale(1.05)",
                      zIndex: "-1",
                    }}
                  ></div>
                  <div
                    className="rounded-circle overflow-hidden position-relative mx-auto"
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      border:
                        "min(12px, 1.5vw) solid rgba(255, 255, 255, 0.05)",
                      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <CImage
                      fluid
                      src={heroImage}
                      alt="Shaiphali Jaiswal"
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: "cover",
                        filter: "grayscale(10%) contrast(110%)",
                      }}
                    />
                  </div>
                </div>
              </CCol>
            </CRow>
          </CContainer>

          {/* Enhanced Scroll Indicator */}
          <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-3 mb-md-4">
            <a
              href="#about"
              className="text-decoration-none scroll-indicator-link"
            >
              <div className="d-flex flex-column align-items-center">
                <span className="mb-1 mb-md-2 small text-white opacity-75">
                  Scroll Down
                </span>
                <div className="scroll-arrow animate-bounce">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-5 bg-light">
          <CContainer>
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">About Me</h2>
              <div className="mx-auto" style={{ maxWidth: "700px" }}>
                <div
                  className="divider bg-primary mx-auto"
                  style={{
                    height: "4px",
                    width: "80px",
                    borderRadius: "2px",
                    opacity: "0.8",
                  }}
                ></div>
              </div>
              <p className="text-muted mt-3 mb-5 lead">
                Passionate Full Stack Developer specializing in MERN stack
              </p>
            </div>

            <CRow className="align-items-center g-5">
              {/* Profile Image Column */}
              <CCol sm={12} lg={5} className="text-center order-lg-1">
                <div className="position-relative mb-4 mb-lg-0">
                  <img
                    src={MyImage}
                    alt="Profile"
                    className="img-fluid rounded-circle shadow"
                    style={{
                      width: "280px",
                      height: "280px",
                      objectFit: "cover",
                      border: "5px solid white",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              </CCol>

              {/* Bio Content Column */}
              <CCol sm={12} lg={7} className="order-lg-2">
                <div className="text-center text-lg-start ps-lg-4">
                  <h3 className="mb-4 fw-semibold">
                    <span className="text-primary">MERN Stack</span> Developer
                  </h3>

                  <div className="mb-4">
                    <p className="text-muted mb-3">
                      I specialize in building robust web applications using
                      modern JavaScript technologies. With a strong foundation
                      in both frontend and backend development, I create
                      efficient, scalable solutions that deliver exceptional
                      user experiences.
                    </p>

                    <div className="d-flex mb-3 justify-content-center justify-content-lg-start">
                      <div className="pe-3">
                        <CIcon
                          icon={cilCheckCircle}
                          className="text-primary mt-1"
                        />
                      </div>
                      <div className="text-start">
                        <span className="fw-medium">Education:</span> BCA Degree
                        & Certified MERN Stack Developer from CodeHelp
                      </div>
                    </div>

                    <div className="d-flex mb-3 justify-content-center justify-content-lg-start">
                      <div className="pe-3">
                        <CIcon
                          icon={cilCheckCircle}
                          className="text-primary mt-1"
                        />
                      </div>
                      <div className="text-start">
                        <span className="fw-medium">Experience:</span> 3 months
                        as Junior Developer + 3 months in market research
                      </div>
                    </div>

                    <div className="d-flex justify-content-center justify-content-lg-start">
                      <div className="pe-3">
                        <CIcon
                          icon={cilCheckCircle}
                          className="text-primary mt-1"
                        />
                      </div>
                      <div className="text-start">
                        <span className="fw-medium">Focus:</span> Building
                        clean, efficient code with attention to performance and
                        maintainability
                      </div>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="mb-4">
                    <h5 className="mb-3 fw-semibold text-center text-lg-start">
                      Technical Skills
                    </h5>
                    <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                      {[
                        "JavaScript",
                        "React",
                        "Node.js",
                        "Express",
                        "MongoDB",
                        "HTML5",
                        "CSS3",
                        "Git",
                      ].map((skill, index) => (
                        <span
                          key={index}
                          className="badge bg-primary bg-opacity-10 text-primary py-2 px-3"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex flex-wrap gap-3 mt-4 pt-2 justify-content-center justify-content-lg-start">
                    <CButton
                      href="#contact"
                      color="primary"
                      className="px-4 py-2 rounded-pill fw-medium d-flex align-items-center"
                    >
                      <CIcon icon={cilEnvelopeOpen} className="me-2" />
                      Contact Me
                    </CButton>
                    <CButton
                      href="#projects"
                      variant="outline"
                      color="primary"
                      className="px-4 py-2 rounded-pill fw-medium d-flex align-items-center"
                    >
                      <CIcon icon={cilFolderOpen} className="me-2" />
                      My Projects
                    </CButton>
                  </div>
                </div>
              </CCol>
            </CRow>
          </CContainer>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-5 bg-light">
          <CContainer>
            <h2 className="text-center mb-5 fw-bold">Skills</h2>
            <CRow>
              {skills.map((skill, index) => (
                <CCol md={6} key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="progress" style={{ height: "10px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </CCol>
              ))}
            </CRow>
          </CContainer>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 bg-white">
          <CContainer>
            <h2 className="text-center mb-5 fw-bold">Projects</h2>
            <CRow
              xs={{ cols: 1 }}
              md={{ cols: 2 }}
              lg={{ cols: 3 }}
              className="g-4"
            >
              {projects.map((project, index) => (
                <CCol key={index}>
                  <CCard className="h-100 shadow-sm border-1 card-hover-effect">
                    <CCardImage
                      orientation="top"
                      src={project.image}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <CCardBody>
                      <CCardTitle>{project.title}</CCardTitle>
                      <CCardText>{project.description}</CCardText>
                      <div className="mt-auto">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="badge bg-light text-dark me-2 mb-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CCardBody>
                    <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between">
                      <div className="d-flex align-items-center justify-content-evenly w-100">
                        {/* Live Demo Button */}
                        <CButton
                          href={project.liveUrl}
                          variant="outline"
                          color="primary"
                          className="rounded-circle px-2"
                          target="_blank"
                        >
                          <CIcon icon={cilExternalLink} size="lg" />
                        </CButton>

                        {/* GitHub Button */}
                        <CButton
                          color="dark"
                          variant="outline"
                          href={project.githubUrl}
                          target="_blank"
                          className="rounded-circle px-2"
                        >
                          <CIcon icon={cibGithub} size="lg" />
                        </CButton>
                      </div>
                    </div>
                  </CCard>
                </CCol>
              ))}
            </CRow>
          </CContainer>
        </section>

        {/* Education Section */}
        <section id="education" className="py-5 bg-light">
          <CContainer>
            <h2 className="text-center mb-5 fw-bold">Education</h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="timeline-content p-4 shadow-sm bg-white rounded">
                    <h5>{edu.institution}</h5>
                    <p className="text-muted mb-1">{edu.degree}</p>
                    <small className="text-primary">{edu.year}</small>
                  </div>
                </div>
              ))}
            </div>
          </CContainer>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 bg-white">
          <CContainer className="max-width-800">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3">Get In Touch</h2>
              <p className="text-muted">
                Feel free to reach out for collaborations or just a friendly
                hello
              </p>
            </div>

            <CRow className="g-4">
              <CCol sm={12} lg={6}>
                <div className="contact-info p-4 rounded-3 shadow-sm">
                  <h4 className="mb-4 fw-semibold">Contact Information</h4>
                  <div className="mb-4">
                    {/* Email */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="contact-icon bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
                        <CIcon icon={cilEnvelopeOpen} size="lg" />
                      </div>
                      <div>
                        <h6 className="mb-0 text-muted small">Email</h6>
                        <p className="text-decoration-none">
                          shaiphalijaiswal978@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="contact-icon bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
                        <CIcon icon={cilPhone} size="lg" />
                      </div>
                      <div>
                        <h6 className="mb-0 text-muted small">Phone</h6>
                        <p className="text-decoration-none">+917355510203</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="d-flex align-items-center">
                      <div className="contact-icon bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
                        <CIcon icon={cilLocationPin} size="lg" />
                      </div>
                      <div>
                        <h6 className="mb-0 text-muted small">Location</h6>
                        <p className="mb-0">Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CCol>

              <CCol sm={12} lg={6}>
                <div className="contact-form p-4 rounded-3 shadow-sm">
                  <CForm onSubmit={handleSubmit}>
                    <CFormInput
                      type="text"
                      id="name"
                      label="Your Name"
                      placeholder="Enter your name"
                      className="mb-3"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <CFormInput
                      type="email"
                      id="email"
                      label="Email Address"
                      placeholder="Enter your email"
                      className="mb-3"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <CFormTextarea
                      id="message"
                      label="Your Message"
                      placeholder="Hello, I'd like to talk about..."
                      rows={1}
                      className="mb-4"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <CButton
                      type="submit"
                      color="primary"
                      className="w-100 py-2 fw-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </CButton>
                  </CForm>
                </div>
              </CCol>
            </CRow>
          </CContainer>
          <Toast/>
        </section>

        {/* Footer */}
        <CFooter className="bg-dark text-white py-3">
          <CContainer>
            <CRow className="align-items-center">
              <CCol
                sm={12}
                md={6}
                className="text-center text-md-start mb-3 mb-md-0"
              >
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} Shaiphali Jaiswal. All
                  rights reserved.
                </p>
              </CCol>
              <CCol sm={12} md={6} className="text-center text-md-end">
                <div className="d-flex justify-content-center justify-content-md-end gap-3">
                  <CButton
                    href="https://www.linkedin.com/in/shaiphali-jaiswal-90960a283/"
                    variant="outline"
                    color="light"
                    className="rounded-circle px-2"
                    target="_blank"
                  >
                    <CIcon icon={cibLinkedin} size="lg" />
                  </CButton>
                  <CButton
                    href="https://github.com/Shaiphali23"
                    variant="outline"
                    color="light"
                    className="rounded-circle px-2"
                    target="_blank"
                  >
                    <CIcon icon={cibGithub} size="lg" />
                  </CButton>
                  <CButton
                    href="https://www.facebook.com/profile.php?id=100046739462256"
                    variant="outline"
                    color="light"
                    className="rounded-circle px-2"
                    target="_blank"
                  >
                    <CIcon icon={cibFacebook} size="lg" />
                  </CButton>
                  <CButton
                    href="https://www.instagram.com/big_fan_of_mommy/"
                    variant="outline"
                    color="light"
                    className="rounded-circle px-2"
                    target="_blank"
                  >
                    <CIcon icon={cibInstagram} size="lg" />
                  </CButton>
                </div>
              </CCol>
            </CRow>
          </CContainer>
        </CFooter>
      </div>
    </>
  );
};

export default App;
