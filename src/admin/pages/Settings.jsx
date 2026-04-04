import React, { useState } from 'react';
import InputField from '../../UIComponents/InputField';

const Settings = () => {
    const [saleHeading, setSaleHeading] = useState("");
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 max-w-xl">

                {/* Section Title */}
                <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-800">
                        Sale Banner Settings
                    </h3>
                    <p className="text-sm text-gray-500">
                        Control how your sale banner appears on the homepage.
                    </p>
                </div>

                {/* Input */}
                <InputField
                    label="Sale Heading"
                    value={saleHeading}
                    onChange={(e) => setSaleHeading(e.target.value)}
                    placeholder="e.g. Big Festive Sale 🎉"
                    tooltip="This text will be shown prominently on your homepage banner."
                />

                {/* Actions */}
                <div className="flex justify-end mt-6 gap-3">
                    <button className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-50">
                        Cancel
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-[#640d14] text-white hover:bg-[#2d0508]">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Settings