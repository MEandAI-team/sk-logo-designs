import { projectsData, type ProjectDetail } from '../../data/projectsData'
import { expect, test, describe } from 'vitest'

describe('ProjectsData', () => {
  test('ProjectsData exports correctly', () => {
    // Test that projectsData is exported and is an array
    expect(projectsData).toBeDefined()
    expect(Array.isArray(projectsData)).toBe(true)
    expect(projectsData.length).toBeGreaterThan(0)
  })

  test('Each project has required properties', () => {
    projectsData.forEach((project: ProjectDetail, index: number) => {
      // Test required string properties
      expect(project.id, `Project ${index} should have an id`).toBeDefined()
      expect(typeof project.id, `Project ${index} id should be a number`).toBe('number')
      expect(project.title, `Project ${index} should have a title`).toBeDefined()
      expect(typeof project.title, `Project ${index} title should be a string`).toBe('string')
      expect(project.industry, `Project ${index} should have an industry`).toBeDefined()
      expect(project.client, `Project ${index} should have a client`).toBeDefined()
      expect(project.year, `Project ${index} should have a year`).toBeDefined()
      expect(project.description, `Project ${index} should have a description`).toBeDefined()
      expect(project.challenge, `Project ${index} should have a challenge`).toBeDefined()
      expect(project.solution, `Project ${index} should have a solution`).toBeDefined()
      expect(project.heroImage, `Project ${index} should have a heroImage`).toBeDefined()

      // Test logoVariations array
      expect(Array.isArray(project.logoVariations), `Project ${index} logoVariations should be an array`).toBe(true)
      expect(project.logoVariations.length, `Project ${index} should have logo variations`).toBeGreaterThan(0)
      
      project.logoVariations.forEach((variation, varIndex) => {
        expect(variation.title, `Project ${index} logo variation ${varIndex} should have a title`).toBeDefined()
        expect(variation.image, `Project ${index} logo variation ${varIndex} should have an image`).toBeDefined()
        expect(variation.description, `Project ${index} logo variation ${varIndex} should have a description`).toBeDefined()
      })

      // Test color palette
      expect(project.colorPalette, `Project ${index} should have a colorPalette`).toBeDefined()
      expect(project.colorPalette.primary, `Project ${index} should have primary color`).toBeDefined()
      expect(project.colorPalette.secondary, `Project ${index} should have secondary color`).toBeDefined()
      expect(project.colorPalette.accent, `Project ${index} should have accent color`).toBeDefined()
      expect(project.colorPalette.text, `Project ${index} should have text color`).toBeDefined()
      expect(project.colorPalette.background, `Project ${index} should have background color`).toBeDefined()

      // Test typography
      expect(project.typography, `Project ${index} should have typography`).toBeDefined()
      expect(project.typography.primary, `Project ${index} should have primary font`).toBeDefined()
      expect(project.typography.secondary, `Project ${index} should have secondary font`).toBeDefined()
      expect(project.typography.description, `Project ${index} should have typography description`).toBeDefined()

      // Test mockups array
      expect(Array.isArray(project.mockups), `Project ${index} mockups should be an array`).toBe(true)
      expect(project.mockups.length, `Project ${index} should have mockups`).toBeGreaterThan(0)

      project.mockups.forEach((mockup, mockupIndex) => {
        expect(mockup.title, `Project ${index} mockup ${mockupIndex} should have a title`).toBeDefined()
        expect(mockup.image, `Project ${index} mockup ${mockupIndex} should have an image`).toBeDefined()
        expect(mockup.description, `Project ${index} mockup ${mockupIndex} should have a description`).toBeDefined()
      })

      // Test guidelines array
      expect(Array.isArray(project.guidelines), `Project ${index} guidelines should be an array`).toBe(true)
      expect(project.guidelines.length, `Project ${index} should have guidelines`).toBeGreaterThan(0)
      
      project.guidelines.forEach((guideline, guidelineIndex) => {
        expect(typeof guideline, `Project ${index} guideline ${guidelineIndex} should be a string`).toBe('string')
        expect(guideline.length, `Project ${index} guideline ${guidelineIndex} should not be empty`).toBeGreaterThan(0)
      })
    })
  })

  test('Project IDs are unique', () => {
    const ids = projectsData.map(project => project.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size, 'All project IDs should be unique').toBe(ids.length)
  })

  test('Color palette values are valid hex colors', () => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

    projectsData.forEach((project, index) => {
      expect(hexColorRegex.test(project.colorPalette.primary), 
        `Project ${index} primary color should be valid hex`).toBe(true)
      expect(hexColorRegex.test(project.colorPalette.secondary), 
        `Project ${index} secondary color should be valid hex`).toBe(true)
      expect(hexColorRegex.test(project.colorPalette.accent), 
        `Project ${index} accent color should be valid hex`).toBe(true)
      expect(hexColorRegex.test(project.colorPalette.text), 
        `Project ${index} text color should be valid hex`).toBe(true)
      expect(hexColorRegex.test(project.colorPalette.background), 
        `Project ${index} background color should be valid hex`).toBe(true)
    })
  })

  test('Project years are valid', () => {
    const currentYear = new Date().getFullYear()
    
    projectsData.forEach((project, index) => {
      const year = parseInt(project.year)
      expect(year, `Project ${index} year should be a valid number`).toBeGreaterThan(2000)
      expect(year, `Project ${index} year should not be in the future`).toBeLessThanOrEqual(currentYear)
    })
  })

  test('Required arrays have minimum items', () => {
    projectsData.forEach((project, index) => {
      expect(project.logoVariations.length, 
        `Project ${index} should have at least 2 logo variations`).toBeGreaterThanOrEqual(2)
      expect(project.mockups.length, 
        `Project ${index} should have at least 2 mockups`).toBeGreaterThanOrEqual(2)
      expect(project.guidelines.length, 
        `Project ${index} should have at least 2 guidelines`).toBeGreaterThanOrEqual(2)
    })
  })
})