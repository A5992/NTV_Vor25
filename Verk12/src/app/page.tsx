import Image from "next/image";
import { cvData } from "./data/cvData";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-green-600 h-48 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 relative mb-2">
            <Image
              src="/wayne_rooney.jpg"
              alt="Picture of Shrek"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white shadow-md"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">{cvData.name}</h1>
          <p className="text-sm sm:text-base italic">{cvData.title}</p>
        </div>

        {/* Body */}
        <div className="px-6 py-10 space-y-10">
          {/* Contact Info */}
          <div>
            <div className="bg-orange-500 text-white text-lg font-bold px-4 py-2 rounded-md mb-2">
              Contact Information
            </div>
            <ul className="text-gray-800 space-y-1">
              <li><strong>📧 Email:</strong> {cvData.contact.email}</li>
              <li><strong>📞 Phone:</strong> {cvData.contact.phone}</li>
              <li><strong>📍 Location:</strong> {cvData.contact.location}</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <div className="bg-orange-500 text-white text-lg font-bold px-4 py-2 rounded-md mb-2">
              Skills
            </div>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              {cvData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Work Experience */}
          <div>
            <div className="bg-orange-500 text-white text-lg font-bold px-4 py-2 rounded-md mb-2">
              Work Experience
            </div>
            <div className="space-y-6">
              {cvData.experience.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.location} | {exp.period}</p>
                  <p className="mt-1 text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="bg-orange-500 text-white text-lg font-bold px-4 py-2 rounded-md mb-2">
              Education
            </div>
            <div>
              <p><strong>Degree:</strong> {cvData.education.degree}</p>
              <p><strong>Institution:</strong> {cvData.education.institution}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-yellow-300 text-center italic text-gray-800 px-4 py-4 rounded-md">
            &quot;{cvData.quote}&quot; — {cvData.name}
          </div>
        </div>
      </div>
    </main>
  );
}
