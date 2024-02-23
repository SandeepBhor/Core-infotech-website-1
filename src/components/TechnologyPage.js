import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const technologies = [
  { category: 'Desktop development (Windows/Linux)', tools: ['C# WinForms', 'Avalonia UI'] },
  { category: 'Web development', tools: ['ASP.NET', 'Vue JS', 'React JS', 'PHP'] },
  { category: 'Mobile Development', tools: ['Flutter', 'React Native', 'Ionic'] },
  { category: 'Backend Storage', tools: ['MS SQL', 'My SQL'] },
  { category: 'AI', tools: ['Python'] },
];

const TechnologyPage = () => {
  return (
    
    <Container className='technology-used-conatiner'>
      <Typography variant="h4" component="h1" mt={4} mb={2}>
        Technology Used
      </Typography>

      <Grid container spacing={3}>
        {technologies.map((tech, index) => (
          <Grid item xs={12} key={index}>
            <Card className="technology-card">
              <CardContent>
                <Typography variant="h6" component="div" className="category-heading" mb={2}>
                  {tech.category}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {tech.tools.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
          
      <Typography variant="body1" className="mt-6 text-blue-600 font-semibold">
  We have mastered the logics in data movement between the branches without any additional cost in hardware setup.
</Typography>
    </Container>
  );
};

export default TechnologyPage;
