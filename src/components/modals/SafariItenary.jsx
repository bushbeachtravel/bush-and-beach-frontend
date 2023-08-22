import { useState } from 'react';
import { masaaiMaraIternary } from '../../data/safari';
import { CardBody, Collapse, Typography, Card } from '@material-tailwind/react';
import { IoIosArrowDropright, IoIosArrowDropdown } from 'react-icons/io';


export const SafariItenary = () => {
  const [sections, setSections] = useState(masaaiMaraIternary);

  const toggleSection = (index) => {
    setSections((prevSections) => prevSections.map((section, i) => (
      i === index ? { ...section, isOpen: !section.isOpen } : section
    )));
  };

  return (
    <ul className="w-full">
      {sections.map((section, index) => (
        <li key={index} className="w-full py-3">
          <button 
          onClick={() => toggleSection(index)} 
          className="items-center flex justify-between w-full text-start"
          >
            <Typography variant="paragraph" className="font-poppins">
              {section.day} {section.title}
            </Typography>
            <div className="iternary-icons">
              {section.isOpen ? <IoIosArrowDropdown /> : <IoIosArrowDropright />}
            </div>
          </button>
          <Collapse open={section.isOpen}>
            <Card className="my-4 mx-auto">
              <CardBody>
                <Typography variant="paragraph" className="font-poppins">
                  {section.activity}
                </Typography>
              </CardBody>
            </Card>
          </Collapse>
        </li>
      ))}
    </ul>
  );
}


