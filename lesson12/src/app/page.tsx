import Image from "next/image";
import { cvData } from "./data/cvData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative h-48 bg-green-600">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Image
              src="/wayne_rooney.jpg"
              alt="Picture of Shrek"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
        
        <div className="pt-16 pb-8 px-6">
          <h1 className="text-4xl font-bold text-center text-gray-900">{cvData.name}</h1>
          <p className="text-center text-gray-600 mt-2">{cvData.title}</p>

          {/* Contact Information */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-center">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">{cvData.contact.email}</p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">{cvData.contact.phone}</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">{cvData.contact.location}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {cvData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
            <div className="mt-4 space-y-6">
              {cvData.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.location} | {exp.period}</p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900">{cvData.education.degree}</h3>
              <p className="text-gray-600">{cvData.education.institution}</p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 text-center italic text-gray-600 border-t pt-8">
            &quot;{cvData.quote}&quot; — {cvData.name}
          </div>
        </div>
      </div>
    </main>
  );
}