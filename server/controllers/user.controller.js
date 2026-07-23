import { PrismaClient } from "@prisma/client";
import cloudinary from "../config/cloudinary.js";
const prisma = new PrismaClient();

export const getUserData = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        isOnboarded: true,
        createdAt: true,
        updatedAt: true,
        resume: true,
      },
    });
    return res.json({ user, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch My profile" });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const { name, email, password, avatar, resume } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        name,
        email,
        password,
        avatar,
        resume,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        isOnboarded: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return res.json({ user: updatedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update My profile" });
  }
};

export const deleteUserData = async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        isOnboarded: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return res.json({ user: deletedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete My profile" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await prisma.userProfile.findUnique({
      where: { userId: req.user.id },
      select: {
        id: true,
        fullName: true,
        profession: true,
        industry: true,
        coverImage: true,
        github: true,
        linkedIn: true,
        country: true,
        city: true,
        university: true,
        phoneNumber: true,
        portfolio: true,
        bio: true,
        profileViews: true,
        yearsOfExperience: true,
        skills: true,
        avatar: true,
        achievements: true,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "My profile not found" });
    }
    return res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch My profile" });
  }
};

export const createUserProfile = async (req, res) => {
  try {
    const {
      fullName: { firstName, lastName },
      profession,
      industry,
      github,
      linkedin,
      bio,
      profileViews,
      yearsOfExperience,
      skills,
      achievements,
    } = req.body;
    const user = await prisma.userProfile.create({
      data: {
        fullName: `${firstName} ${lastName}`,
        user: { connect: { id: req.user.id } },
      },
      select: { id: true, fullName: true },
    });
    return res.json({ user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to create My profile" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const {
      fullName,
      profession,
      industry,
      github,
      linkedIn,
      country,
      city,
      bio,
      profileViews,
      university,
      yearsOfExperience,
      skills,
      achievements,
      portfolio,
      phoneNumber,
    } = req.body;
    const user = await prisma.userProfile.findUnique({
      where: { userId: req.user.id },  
    });
    if (!user) {
      return res.status(404).json({ error: "My profile not found" });
    }
    const updateData = {};
    if (fullName && fullName.trim() !== "") {
      updateData.fullName = fullName;
    }
    if (industry !== "") updateData.industry = industry;
    if (linkedIn !== "") updateData.linkedIn = linkedIn;
    if (portfolio !== "") updateData.portfolio = portfolio;
    if (phoneNumber !== "") updateData.phoneNumber = phoneNumber;
    if (university !== "") updateData.university = university;
    if (city !== "") updateData.city = city;
    if (bio !== "") updateData.bio = bio;
    if (country !== "") updateData.country = country;
    if (github !== "") updateData.github = github;
    if (profession !== "") updateData.profession = profession;

    const updatedUser = await prisma.userProfile.update({
      where: { userId: req.user.id },
      data: {
        ...updateData,
      },
      select: {
        id: true,
        fullName: true,
        profession: true,
        industry: true,
        github: true,
        linkedIn: true,
        phoneNumber: true,
        country: true,
        city: true,
        bio: true,
        profileViews: true,
        yearsOfExperience: true,
        skills: true,
        achievements: true,
      },
    });
    return res.json({ user: updatedUser, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update My profile", message: error.message });
  }
};

export const getUserEducation = async (req, res) => {
  try {
    const education = await prisma.education.findUnique({
      where: { userId: req.user.id },
      select: {
        school: true,
        institution: true,
        degree: true,
        fieldOfStudy: true,
        startYear: true,
        endYear: true,
        grade: true,
      },
    })
    return res.json({ education });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get education", message: error.message });
  }
};

export const createEducation = async (req, res) => {
  try {
    const {
      school,
      institution,
      degree,
      fieldOfStudy,
      startYear,
      endYear,
      grade,
    } = req.body;
    const updateData = {};
    if(school && school.trim() !== "") updateData.school = school;
    if(institution && institution.trim() !== "") updateData.institution = institution;
    if(degree && degree.trim() !== "") updateData.degree = degree;
    if(fieldOfStudy && fieldOfStudy.trim() !== "") updateData.fieldOfStudy = fieldOfStudy;
    if(startYear !== null) updateData.startYear = startYear;
    if(endYear !== null) updateData.endYear = endYear;
    if(grade !== null) updateData.grade = grade;
    const education = await prisma.education.upsert({
      where: {  
        userId: req.user.id,
      },
      create: {
        school,
        institution,
        degree,
        fieldOfStudy,
        startYear,
        endYear,
        grade,
        user: { connect: { id: req.user.id } },
      },
      update: {
        ...updateData
      },
    });
    return res.json({ education });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create education", message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { title, techStack, description, githubUrl, projectLink } = req.body;
    const project = await prisma.project.create({
      data: {
        title,
        techStack,
        description,
        githubUrl,
        projectLink,
        user: { connect: { id: req.user.id } },
      },
    });
    return res.json({ project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create project" });
  }
};

export const completeOnboarding = async (req, res) => {
  try {
    await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        isOnboarded: true,
      },
    });

    res.json({
      success: true,
      message: "Onboarding completed",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateCover = async (req, res) => {
  try{

    if (!req.file?.path) {
      return res.status(400).json({ error: "Cover file is required" });
    }
  
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "coverImage",
      width: 1584,
      height: 396,
      crop: "fill",
    });
  
    const updated = await prisma.userProfile.update({
      where: { userId: req.user.id },
      data: { coverImage: result.secure_url },
    })
    res.json({ success: true, coverImage: result.secure_url, user: updated })
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update cover image", message: error.message });
  }
}


export const updateAvatar = async (req, res) => {
  try{

    if (!req.file?.path) {
      return res.status(400).json({ error: "Avatar file is required" });
    }
  
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "avatar",
      width: 150,
      height: 150,
      crop: "fill",
    });
  
    const updated = await prisma.userProfile.update({
      where: { userId: req.user.id },
      data: { avatar: result.secure_url },
    })
    res.json({ success: true, avatar: result.secure_url, user: updated })
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update avatar", message: error.message });
  }
}