import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
export const getMonthlyStats = async (req, res) => {
  try {
    const [users, jobs, companies, internships] = await Promise.all([
      prisma.$queryRaw`SELECT MONTH(createdAt) AS month_number, COUNT(*) AS count FROM users WHERE YEAR(createdAt) = YEAR(CURRENT_DATE) GROUP BY MONTH(createdAt)`,
      prisma.$queryRaw`SELECT MONTH(createdAt) AS month_number, COUNT(*) AS count FROM jobs WHERE YEAR(createdAt) = YEAR(CURRENT_DATE) GROUP BY MONTH(createdAt)`,
      prisma.$queryRaw`SELECT MONTH(createdAt) AS month_number, COUNT(*) AS count FROM companies WHERE YEAR(createdAt) = YEAR(CURRENT_DATE) GROUP BY MONTH(createdAt)`,
      prisma.$queryRaw`SELECT MONTH(createdAt) AS month_number, COUNT(*) AS count FROM internships WHERE YEAR(createdAt) = YEAR(CURRENT_DATE) GROUP BY MONTH(createdAt)`
    ]);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthlyData = months.map((month, index) => {
      const monthNumber = index + 1;

      const userData = users.find(
        (item) => Number(item.month_number) === monthNumber
      );

      const companyData = companies.find(
        (item) => Number(item.month_number) === monthNumber
      );

      const jobData = jobs.find(
        (item) => Number(item.month_number) === monthNumber
      );

      const internshipData = internships.find(
        (item) => Number(item.month_number) === monthNumber
      );

      return {
        month,
        user: Number(userData?.count ?? 0),
        company: Number(companyData?.count ?? 0),
        job: Number(jobData?.count ?? 0),
        internship: Number(internshipData?.count ?? 0),
      };
    });

    res.status(200).json({
      success: true,
      data: monthlyData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch monthly stats", message: error.message });
  }
};
