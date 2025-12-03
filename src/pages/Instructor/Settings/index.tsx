import React, { useState, useId } from "react";
import { IROUTES } from "../../../utils/constants/routes";
import Layout from "../../../components/Layout";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { Tabs, Tab, Box, Avatar } from "@mui/material";
import { FaCamera } from "react-icons/fa";
import toast from "react-hot-toast";
import type { TabPanelProps } from "../../../interfaces/VerticalTabs.interface";

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const Settings = () => {
  const id = useId();
  const [activeTab, setActiveTab] = useState(0);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProfileLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Profile updated successfully!");
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsProfileLoading(false);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPasswordLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Password updated successfully!");
    } catch {
      toast.error("Failed to update password. Please try again.");
    } finally {
      setIsPasswordLoading(false);
    }
  };

  return (
    <Layout parentPage={IROUTES.SETTINGS} pageHeading="Settings">
      <div className="w-full mt-6">
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="settings tabs"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  paddingBottom: "0px",
                  color: "#6b7280",
                },
                "& .Mui-selected": {
                  color: "#4f46e5 !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#4f46e5",
                },
              }}
            >
              <Tab label="Personal Information" />
              <Tab label="Change Password" />
            </Tabs>
          </Box>

          {/* personal info tab */}
          <TabPanel value={activeTab} index={0}>
            <form onSubmit={handleProfileSubmit} className="p-4 sm:p-8 pt-4">
              <div className="mb-6">
                <label className="text-sm block mb-3">Profile Picture</label>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Avatar
                    src="https://avatar.iran.liara.run/public/job/teacher/male"
                    alt="Profile"
                    sx={{ width: { xs: 80, sm: 96 }, height: { xs: 80, sm: 96 } }}
                  />
                  <label
                    htmlFor={`avatar-${id}`}
                    className="absolute bottom-0 right-0 bg-primary-600 text-white p-1.5 sm:p-2 rounded-full cursor-pointer hover:bg-primary-700 transition-colors shadow-md"
                  >
                    <FaCamera className="text-xs" />
                  </label>
                  <input
                    type="file"
                    id={`avatar-${id}`}
                    name="avatar"
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  label="First Name"
                  type="text"
                  id={`firstName-${id}`}
                  name="firstName"
                  placeholder="Enter your first name"
                  className="mb-4 w-full sm:w-1/2"
                />
                <Input
                  label="Last Name"
                  type="text"
                  id={`lastName-${id}`}
                  name="lastName"
                  placeholder="Enter your last name"
                  className="mb-4 w-full sm:w-1/2"
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                id={`email-${id}`}
                name="email"
                placeholder="Enter your email address"
                className="mb-4 w-full"
              />

              <Input
                label="Phone Number"
                type="tel"
                id={`phone-${id}`}
                name="phone"
                placeholder="Enter your phone number"
                className="mb-4 w-full"
              />

              <div className="mb-4">
                <label htmlFor={`bio-${id}`} className="text-sm font-medium text-gray-700">
                  Bio
                </label>
                <textarea
                  id={`bio-${id}`}
                  name="bio"
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="w-full mt-1.5 border border-gray-300 px-3 py-2.5 text-sm text-gray-900 rounded-lg outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all duration-200 resize-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex justify-end mt-6">
                <Button text="Save Changes" type="submit" loading={isProfileLoading} />
              </div>
            </form>
          </TabPanel>

          {/* Change Password tab */}
          <TabPanel value={activeTab} index={1}>
            <form onSubmit={handlePasswordSubmit} className="p-4 sm:p-8 pt-4">
              <div className="w-full sm:max-w-md">
                <Input
                  label="Current Password"
                  type="password"
                  id={`currentPassword-${id}`}
                  name="currentPassword"
                  placeholder="Enter your current password"
                  className="mb-4"
                />

                <Input
                  label="New Password"
                  type="password"
                  id={`newPassword-${id}`}
                  name="newPassword"
                  placeholder="Enter your new password"
                  className="mb-4"
                />

                <Input
                  label="Confirm New Password"
                  type="password"
                  id={`confirmPassword-${id}`}
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  className="mb-4"
                />

                <p className="text-xs text-gray-500 mb-6">
                  Password must be at least 8 characters long and include a mix
                  of letters, numbers, and special characters.
                </p>

                <div className="flex justify-end">
                  <Button text="Update Password" type="submit" loading={isPasswordLoading} />
                </div>
              </div>
            </form>
          </TabPanel>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
