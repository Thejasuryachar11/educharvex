"use client"

import { MessageCircle, MapPin, Instagram, Phone } from "lucide-react"

export default function FloatingButtons() {
  const phoneNumber = "918548906373"

  const message = encodeURIComponent(
    "Hi, I would like to know more about the courses at Banashree Tutorials."
  )

  const mapLink =
    "https://www.google.com/maps/place/EduCharvex+Banashree+Tutorials/@13.0359,77.548973,1862m/data=!3m1!1e3!4m6!3m5!1s0x3bae3d00df8718a5:0xf14208f76f7737d8!8m2!3d13.0359001!4d77.5489728!16s%2Fg%2F11n3pzgbg_?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D"

  const instagramLink =
    "https://www.instagram.com/banashreetutorials?igsh=YnVlMzc2c3Bucnh2"

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call */}
      <a
        href={`tel:+${phoneNumber}`}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Maps */}
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      >
        <MapPin className="h-6 w-6" />
      </a>

      {/* Instagram */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      >
        <Instagram className="h-6 w-6" />
      </a>

    </div>
  )
}