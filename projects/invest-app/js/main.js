import 'preline';
import '@iconify/iconify';

import Investments from './lib/investments';
import Storage from './services/storage';
import { investments } from './data/seed';

import '../css/style.css';

Storage.load('investments', investments);

Investments.load();
