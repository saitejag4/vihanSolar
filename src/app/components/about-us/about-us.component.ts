import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  teamString : String = "Meet Our Leadership Team";
  aboutUsString : String = "About Us";
  aboutUs = [
    { 'firsrIntro': "We specialize in delivering comprehensive solar design and engineering services tailored to the unique needs of solar businesses, including preliminary production reports, permit designs, as-builts, PE stamps, interconnection, permitting, monitoring, and PTO applications in both the USA and Singapore markets.Renowned as a market leader, we excel in providing customized end-to-end Solar Rooftop Power Solutions for commercial and industrial organizations across India. Our team comprises seasoned solar professionals with a decade-long expertise in the industry. With our profound experience, we ensure the implementation of proper and essential measures to guarantee the success of your solar projects. Whether it's preliminary planning or the final execution, we offer comprehensive assistance for all aspects of your solar systems, ensuring efficiency and excellence at every step" },
    { 'secondIntro': "Renowned as a market leader, we excel in providing customized end-to-end Solar Rooftop Power Solutions for commercial and industrial organizations across India. Our team comprises seasoned solar professionals with a decade-long expertise in the industry. With our profound experience, we ensure the implementation of proper and essential measures to guarantee the success of your solar projects. Whether it's preliminary planning or the final execution, we offer comprehensive assistance for all aspects of your solar systems, ensuring efficiency and excellence at every step." },
    { 'vision': "Empowering a Sustainable Future: Our vision at Vihaan Solar is to lead the global transition to renewable energy by providing unparalleled solar solutions. We envision a world where clean, efficient, and accessible solar power drives environmental stewardship, economic growth, and lasting prosperity for communities worldwide." },
    { 'mission': 'Innovating Solar Excellence: At Vihaan Solar, our mission is to deliver cutting-edge solar design and engineering services tailored to the diverse needs of solar businesses. We are dedicated to providing comprehensive preliminary production reports, permit designs, as-builts, PE stamps, interconnection services, permitting solutions, monitoring systems, and PTO applications in both the USA and Singapore markets. Renowned as market leaders, we specialize in crafting customized end-to-end Solar Rooftop Power Solutions for commercial and industrial organizations across India.' },
    {
      'ourCommitmets': [
        { 0: "Innovation and Expertise: We strive for constant innovation, leveraging a team of seasoned solar professionals with a decade-long expertise, ensuring we remain at the forefront of the solar industry." },
        { 1: "Customized Solutions: Tailoring our services to meet the unique needs of each client, we provide comprehensive assistance, from preliminary planning to final execution, guaranteeing efficiency and excellence at every stage of your solar projects." },
        { 2: "Environmental Leadership: We are committed to reducing carbon emissions and combating climate change by promoting the adoption of renewable energy solutions globally." },
        { 3: "Client Success: Our success is measured by the success of our clients. We are dedicated to ensuring the implementation of proper and essential measures to guarantee the success of every solar project we undertake." },
        { 4: "Global Impact: By offering unparalleled solar solutions, we contribute to a sustainable future, driving environmental conservation, economic advancement, and social well-being across the globe." }
      ]
    }
  ]
}
