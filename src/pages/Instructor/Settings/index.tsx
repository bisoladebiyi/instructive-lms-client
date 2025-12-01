import React, { useState, useId } from "react";
import { IROUTES } from "../../../utils/constants/routes";
import Layout from "../../../components/Layout";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { Tabs, Tab, Box, Avatar } from "@mui/material";
import { FaCamera } from "react-icons/fa";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Layout parentPage={IROUTES.SETTINGS} pageHeading="Settings">
      <div className="w-full mt-5">
        <div className="border border-gray-200 rounded-md">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="settings tabs"
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  paddingBottom: "0px"
                },
                "& .Mui-selected": {
                  color: "#000 !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#000",
                },
              }}
            >
              <Tab label="Personal Information" />
              <Tab label="Change Password" />
            </Tabs>
          </Box>

          {/* personal info tab */}
          <TabPanel value={activeTab} index={0}>
            <form className="p-8 pt-4">
              <div className="mb-6">
                <label className="text-sm block mb-3">Profile Picture</label>
                <div className="relative w-24 h-24">
                  <Avatar
                    src="https://avatar.iran.liara.run/public/job/teacher/male"
                    alt="Profile"
                    sx={{ width: 96, height: 96 }}
                  />
                  <label
                    htmlFor={`avatar-${id}`}
                    className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors"
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

              <div className="flex gap-4">
                <Input
                  label="First Name"
                  type="text"
                  id={`firstName-${id}`}
                  name="firstName"
                  placeholder="Enter your first name"
                  className="mb-4 w-1/2"
                />
                <Input
                  label="Last Name"
                  type="text"
                  id={`lastName-${id}`}
                  name="lastName"
                  placeholder="Enter your last name"
                  className="mb-4 w-1/2"
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
                <label htmlFor={`bio-${id}`} className="text-sm">
                  Bio
                </label>
                <textarea
                  id={`bio-${id}`}
                  name="bio"
                  placeholder="Tell us about yourself..."
                  rows={4}
                  className="w-full mt-1 border border-gray-400 p-2 text-sm text-gray-500 rounded outline-0 resize-none"
                />
              </div>

              <div className="flex justify-end mt-6">
                <Button text="Save Changes" type="submit" />
              </div>
            </form>
          </TabPanel>

          {/* Change Password tab */}
          <TabPanel value={activeTab} index={1}>
            <form className="p-8 pt-4">
              <div className="max-w-md">
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
                  <Button text="Update Password" type="submit" />
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
