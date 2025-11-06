import { memo } from "react";
import { Award, Target, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export const AboutSection = memo(() => (
  <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column - Main About Card */}
        <div className="flex flex-col">
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 h-full hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-semibold">
                  About Us
                </h2>
                <p className="text-sm sm:text-base text-gray-500">
                  Crafting digital excellence
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                We are a team of passionate innovators dedicated to transforming
                ideas into exceptional digital experiences. With over a decade
                of expertise in cutting-edge technology and design, we deliver
                solutions that drive real business results.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Our approach combines strategic thinking with creative
                execution, ensuring every project not only meets but exceeds
                expectations. We believe in building lasting partnerships with
                our clients, understanding their unique challenges, and crafting
                tailored solutions that propel them forward.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Two Stacked Cards */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex-1">
            <img src="/images/team.png" alt="team" width={"100%"} />
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 flex-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                Our Values
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Years
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Projects
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 mb-1">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Satisfaction
                </div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 mb-1">
                  98%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

AboutSection.displayName = "AboutSection";
