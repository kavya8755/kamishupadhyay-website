// One place to reference site photography by a short key.
// To add a photo: drop it in src/assets/images/, import it here, add a key.
// Photos from Pexels (free to use, no attribution required); the footer links to Pexels.
import type { ImageMetadata } from 'astro';

import fiber from '../assets/images/fiber.jpg';
import datacenter from '../assets/images/datacenter.jpg';
import rgbPc from '../assets/images/rgb-pc.jpg';
import lab from '../assets/images/lab.jpg';
import ideDebug from '../assets/images/ide-debug.jpg';
import laptopDesk from '../assets/images/laptop-desk.jpg';
import robotDog from '../assets/images/robot-dog.jpg';
import codeSublime from '../assets/images/code-sublime.jpg';
import humanoid from '../assets/images/humanoid.jpg';
import quantumRings from '../assets/images/quantum-rings.jpg';
import neuralRing from '../assets/images/neural-ring.jpg';
import teamLaptops from '../assets/images/team-laptops.jpg';
import robotChess from '../assets/images/robot-chess.jpg';
import robotArm from '../assets/images/robot-arm.jpg';
import gpuDesk from '../assets/images/gpu-desk.jpg';
import documents from '../assets/images/documents.jpg';
import gpuStack from '../assets/images/gpu-stack.jpg';

export type Photo = { src: ImageMetadata; alt: string };

export const IMAGES = {
  'fiber': { src: fiber, alt: 'Dense bundles of fibre-optic cables patched into a network panel' },
  'datacenter': { src: datacenter, alt: 'An aisle of server racks in a data center' },
  'rgb-pc': { src: rgbPc, alt: 'Inside a workstation: a graphics card lit by RGB fans' },
  'lab': { src: lab, alt: 'An engineering lab with workstations and test equipment' },
  'ide-debug': { src: ideDebug, alt: 'A laptop showing code paused in a debugger, glasses in front of the screen' },
  'laptop-desk': { src: laptopDesk, alt: 'A laptop with code open on a wooden desk beside a pair of glasses' },
  'robot-dog': { src: robotDog, alt: 'A four-legged robot walking across a carpeted floor' },
  'code-sublime': { src: codeSublime, alt: 'A laptop with source code in a text editor next to a small metal robot figure' },
  'humanoid': { src: humanoid, alt: 'A humanoid robot with an expressive face, mid-conversation' },
  'quantum-rings': { src: quantumRings, alt: 'Abstract rings of light intersecting along a bright horizontal beam' },
  'neural-ring': { src: neuralRing, alt: 'A glowing ring with threads of light branching out like a neural network' },
  'team-laptops': { src: teamLaptops, alt: 'Two colleagues working on laptops at a shared marble table' },
  'robot-chess': { src: robotChess, alt: 'A robotic arm poised above a chessboard mid-game' },
  'robot-arm': { src: robotArm, alt: 'A robotic arm on a mobile base reaching toward a flower' },
  'gpu-desk': { src: gpuDesk, alt: 'A graphics card on a desk next to a mechanical keyboard and mouse' },
  'documents': { src: documents, alt: 'Hands typing on a laptop next to a stack of paper documents' },
  'gpu-stack': { src: gpuStack, alt: 'Several GeForce RTX graphics cards stacked together' },
} satisfies Record<string, Photo>;

export type ImageKey = keyof typeof IMAGES;
