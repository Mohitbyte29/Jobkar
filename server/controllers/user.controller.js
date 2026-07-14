import { PrismaClient } from "@prisma/client";
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
      coverImage,
      github,
      linkedin,
      bio,
      profileViews,
      yearsOfExperience,
      skills,
      avatar,
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
      fullName: { firstName, lastName },
      profession,
      industry,
      coverImage,
      github,
      linkedIn,
      country,
      city,
      bio,
      profileViews,
      yearsOfExperience,
      skills,
      avatar,
      achievements,
      portfolio,
      phoneNumber,
    } = req.body;
    const user = await prisma.userProfile.findUnique({
      where: { userId: req.user.id },
      select: {
        fullName: true,
        id: true,
        profession: true,
        industry: true,
        coverImage: true,
        github: true,
        linkedIn: true,
        portfolio: true,
        phoneNumber: true,
        country: true,
        city: true,
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
    const updateData = {};
    if (fullName !== undefined)
      updateData.fullName = `${firstName} ${lastName}`;
    if (industry !== undefined) updateData.industry = industry;
    if (coverImage !== undefined) updateData.coverImage = coverImage;
    if (linkedIn !== undefined) updateData.linkedIn = linkedIn;
    if (portfolio !== undefined) updateData.portfolio = portfolio;
    if (phoneNumber !== undefined) updateData.phoneNumber = phoneNumber;
    if (city !== undefined) updateData.city = city;
    if (bio !== undefined) updateData.bio = bio;
    if (country !== undefined) updateData.country = country;
    if (github !== undefined) updateData.github = github;
    if (profession !== undefined) updateData.profession = profession;
    const updatedUser = await prisma.userProfile.update({
      where: { userId: req.user.id },
      data: {
        ...updateData,
      },
      select: {
        id: true,
        profession: true,
        industry: true,
        coverImage: true,
        github: true,
        linkedIn: true,
        portfolio: true,
        phoneNumber: true,
        country: true,
        city: true,
        bio: true,
        profileViews: true,
        yearsOfExperience: true,
        skills: true,
        avatar: true,
        achievements: true,
      },
    });
    return res.json({ user: updatedUser, success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update My profile" });
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
    const education = await prisma.education.create({
      data: {
        school,
        institution,
        degree,
        fieldOfStudy,
        startYear,
        endYear,
        grade,
        user: { connect: { id: req.user.id } },
      },
    });
    return res.json({ education });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create education" });
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
