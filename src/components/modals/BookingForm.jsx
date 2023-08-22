import { useState } from 'react';
import { masaaiMaraIternary } from '../../data/safari';
import { Button, CardBody, Collapse, Typography, Card } from '@material-tailwind/react';
import { FiPlus } from 'react-icons/fi';


export const SafariDetailsPage = () => {
  const [sections, setSections] = useState(masaaiMaraIternary);

  const toggleSection = (index) => {
    setSections((prevSections) => prevSections.map((section, i) => (
      i === index ? { ...section, isOpen: !section.isOpen } : section
    )));
  };

  return (
    <ul>
      {sections.map((section, index) => (
        <li key={index}>
          {section.title}
          <Button onClick={() => toggleSection(index)}>
            <FiPlus />
          </Button>
          <Collapse open={section.isOpen}>
            <Card className="my-4">
              <CardBody>
                <Typography variant="paragraph">
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


