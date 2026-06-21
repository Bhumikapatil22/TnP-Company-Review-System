import Company from "../models/Company.js";

export const createCompany = async (req, res) => {
  try {
    const { name, location, industry, email } = req.body;

    const company = new Company({
      name,
      location,
      industry,
      email,
    });

    const savedCompany = await company.save();

    res.status(201).json({
      company: savedCompany,
      message: "Company created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while creating company",
    });
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
      .populate("reviews")
      .exec();

    res.json({
      companies,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while fetching companies",
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCompany = await Company.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCompany) {
      return res.status(404).json({
        message: "Company not found",
      });
    }

    res.status(200).json({
      company: updatedCompany,
      message: "Company updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating company",
    });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCompany = await Company.findByIdAndDelete(id);

    if (!deletedCompany) {
      return res.status(404).json({
        message: "Company not found",
      });
    }

    res.status(200).json({
      message: "Company deleted successfully",
      company: deletedCompany,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting company",
    });
  }
};
